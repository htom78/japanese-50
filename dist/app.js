// ============================================================
// Japanese 50 課 v2 — SPA logic
// Hash router · TTS · localStorage progress
// Data is preloaded via data.js as window.__LESSONS / window.__META
// ============================================================

(() => {
  'use strict';

  const LESSONS = window.__LESSONS || [];
  const META = window.__META || { name: '日本語 50 課', totalLessons: 50 };
  const LS = {
    progress: 'jp50.progress.v1',          // { completed: number[], current: number }
    display:  'jp50.display.v1',           // { furigana: bool, romaji: bool, translation: bool }
    speed:    'jp50.speed.v1',             // string
    loop:     'jp50.loop.v1',              // string: '1','2','3','5','inf'
  };

  // Estimated speech rate for Japanese TTS (kana per second at rate=1.0).
  // Used by the elapsed-time fallback when SpeechSynthesisUtterance.boundary
  // events don't fire (e.g. Firefox).
  const ESTIMATED_KANA_PER_SECOND_AT_1X = 5.5;

  // ---------- Karaoke annotation ------------------------------------------
  // Wrap every "visual block" of a sentence's `jp` HTML in a span carrying
  // its position inside the spoken `plain` text:
  //   <ruby>K<rt>R</rt></ruby>   → one span owning R.length chars in plain
  //   any standalone character    → one span owning 1 char in plain
  // The renderer also exposes the span's [pStart, pStart+pLen) range so the
  // TTS engine can highlight by SpeechSynthesisUtterance.charIndex.
  function annotateJp(jp, plain) {
    if (!jp) return '';
    let pIdx = 0;
    let i = 0;
    let out = '';
    const n = jp.length;
    while (i < n) {
      if (jp.startsWith('<ruby>', i)) {
        const rtStart = jp.indexOf('<rt>', i);
        const rtEnd = jp.indexOf('</rt>', rtStart);
        const rubyEnd = jp.indexOf('</ruby>', rtEnd);
        if (rtStart < 0 || rtEnd < 0 || rubyEnd < 0) {
          // Malformed ruby — emit as a literal char and advance.
          out += '<span class="kchar" data-ps="' + pIdx + '" data-pl="1">' + jp[i] + '</span>';
          pIdx += 1;
          i += 1;
          continue;
        }
        const reading = jp.slice(rtStart + 4, rtEnd);
        const pLen = reading.length;
        const inner = jp.slice(i + 6, rubyEnd) // includes <rt>...</rt>
          // keep ruby markup intact for furigana display
          ;
        out += '<span class="kchar" data-ps="' + pIdx + '" data-pl="' + pLen + '"><ruby>' + inner + '</ruby></span>';
        pIdx += pLen;
        i = rubyEnd + 7; // length of '</ruby>'
      } else {
        // Standalone character. Most punctuation / kana / katakana is 1 char
        // in `plain` too. We do not split surrogate pairs because the dataset
        // only uses BMP code points.
        const ch = jp[i];
        out += '<span class="kchar" data-ps="' + pIdx + '" data-pl="1">' + ch + '</span>';
        pIdx += 1;
        i += 1;
      }
    }
    return out;
  }

  // For sentences without karaoke needs (questions, grammar examples), render
  // the original ruby HTML untouched — `annotateJp` adds spans we don't need
  // there.
  function plainJp(jp) { return jp || ''; }

  // --- Progress store -------------------------------------------------------
  function getProgress() {
    try {
      const raw = localStorage.getItem(LS.progress);
      if (!raw) return { completed: [], current: 1 };
      const v = JSON.parse(raw);
      return {
        completed: Array.isArray(v.completed) ? v.completed : [],
        current: typeof v.current === 'number' ? v.current : 1,
      };
    } catch { return { completed: [], current: 1 }; }
  }
  function setProgress(p) {
    try { localStorage.setItem(LS.progress, JSON.stringify(p)); } catch {}
  }
  function markCompleted(id) {
    const p = getProgress();
    if (!p.completed.includes(id)) p.completed.push(id);
    p.current = Math.max(p.current, id + 1);
    setProgress(p);
    refreshTtsAndProgress();
  }
  function getDisplayPrefs() {
    try {
      const raw = localStorage.getItem(LS.display);
      if (!raw) return { furigana: true, romaji: true, translation: true };
      return Object.assign({ furigana: true, romaji: true, translation: true }, JSON.parse(raw));
    } catch { return { furigana: true, romaji: true, translation: true }; }
  }
  function setDisplayPrefs(p) {
    try { localStorage.setItem(LS.display, JSON.stringify(p)); } catch {}
    applyDisplayPrefs(p);
  }
  function applyDisplayPrefs(p) {
    document.body.classList.toggle('hide-furigana', !p.furigana);
    document.body.classList.toggle('hide-romaji', !p.romaji);
    document.body.classList.toggle('hide-translation', !p.translation);
  }

  // --- Helpers --------------------------------------------------------------
  function pad2(n) { return String(n).padStart(2, '0'); }
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function stripTags(s) {
    return String(s)
      .replace(/<rt>[^<]*<\/rt>/gi, '')   // drop ruby readings
      .replace(/<[^>]*>/g, '');             // strip remaining tags
  }
  function lessonsByLevel(level) { return LESSONS.filter(l => l.level === level); }
  function lessonById(id) { return LESSONS.find(l => l.id === id); }

  // --- TTS engine -----------------------------------------------------------
  const TTS = (() => {
    let voice = null;
    let queue = [];
    let isPlaying = false;
    let currentItem = null;
    let nowReadingEl = null;
    let allItems = [];          // canonical reference, used by repeat / range
    let lastClickedItem = null; // for "Set A" / "Set B"
    let abRange = null;         // { aIdx, bIdx } indexing into allItems
    let pickingAB = null;       // 'A' | 'B' | null — gesture state
    let totalRepeatsRemaining = 0; // mirrors loop count for current pass
    let fallbackTimer = null;
    let utteranceStartTs = 0;
    let estimatedDurationMs = 0;
    const synth = window.speechSynthesis;

    function pickVoice() {
      if (!synth) return;
      const voices = synth.getVoices();
      const preferred = voices.find(v => v.lang === 'ja-JP' && /Kyoko|Otoya|O-ren|Google/i.test(v.name));
      voice = preferred || voices.find(v => v.lang === 'ja-JP') || voices.find(v => v.lang.startsWith('ja')) || null;
      const pill = document.getElementById('tts-status');
      if (pill) {
        if (voice) {
          pill.textContent = '音声 · ' + voice.name.split(' ')[0];
          pill.classList.remove('unavailable');
        } else {
          pill.textContent = '音声 · 未対応';
          pill.classList.add('unavailable');
        }
      }
    }

    if (synth) {
      pickVoice();
      synth.onvoiceschanged = pickVoice;
    }

    function getRate() {
      try { return parseFloat(localStorage.getItem(LS.speed)) || 0.85; } catch { return 0.85; }
    }
    function setRate(r) {
      try { localStorage.setItem(LS.speed, String(r)); } catch {}
    }

    function getLoopCount() {
      try {
        const v = localStorage.getItem(LS.loop) || '1';
        if (v === 'inf') return Infinity;
        const n = parseInt(v, 10);
        return n > 0 ? n : 1;
      } catch { return 1; }
    }
    function setLoopCount(v) {
      try { localStorage.setItem(LS.loop, String(v)); } catch {}
      updateLoopUi();
    }

    // ---------- Karaoke highlighting ----------
    function applyKaraoke(item, charIndex) {
      if (!item || !item.spans) return;
      for (const s of item.spans) {
        const past = s.ps + s.pl <= charIndex;
        const active = s.ps <= charIndex && charIndex < s.ps + s.pl;
        s.el.classList.toggle('kc-past', past);
        s.el.classList.toggle('kc-active', active);
      }
    }
    function clearKaraoke(item) {
      if (!item || !item.spans) return;
      for (const s of item.spans) {
        s.el.classList.remove('kc-past', 'kc-active');
      }
    }
    function buildSpansFor(item) {
      // Cache the per-span position once per item.
      if (item.spans) return item.spans;
      if (!item.el) { item.spans = []; return item.spans; }
      const nodes = item.el.querySelectorAll('.kchar');
      const spans = [];
      nodes.forEach(el => {
        const ps = parseInt(el.dataset.ps, 10);
        const pl = parseInt(el.dataset.pl, 10);
        if (Number.isFinite(ps) && Number.isFinite(pl)) {
          spans.push({ el, ps, pl });
        }
      });
      item.spans = spans;
      return spans;
    }

    // ---------- Speak primitive ----------
    function clearFallback() {
      if (fallbackTimer) { clearInterval(fallbackTimer); fallbackTimer = null; }
    }

    function speak(item, onEnd) {
      if (!synth) { onEnd && onEnd(); return; }
      const text = item.plain;
      buildSpansFor(item);
      // Reset karaoke state for the about-to-be-spoken item.
      clearKaraoke(item);

      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      if (voice) u.voice = voice;
      u.rate = getRate();
      u.pitch = 1.0;

      let gotBoundary = false;
      utteranceStartTs = performance.now();
      estimatedDurationMs = (text.length / ESTIMATED_KANA_PER_SECOND_AT_1X / Math.max(0.5, u.rate)) * 1000;

      u.onboundary = (ev) => {
        // Chrome/Safari fire 'word' boundary events with charIndex into `text`.
        // Some browsers also fire 'sentence'. We accept all and trust charIndex.
        const idx = typeof ev.charIndex === 'number' ? ev.charIndex : 0;
        if (idx >= 0) gotBoundary = true;
        applyKaraoke(item, idx);
      };
      u.onend = () => {
        clearFallback();
        // Mark every span past at end so the bar visually completes.
        applyKaraoke(item, text.length + 1);
        onEnd && onEnd();
      };
      u.onerror = () => { clearFallback(); onEnd && onEnd(); };

      synth.speak(u);

      // Fallback timer: if no boundary event fires within the first 600ms
      // (e.g. Firefox), simulate per-char advancement using elapsed time.
      clearFallback();
      fallbackTimer = setInterval(() => {
        if (gotBoundary) { clearFallback(); return; }
        const elapsed = performance.now() - utteranceStartTs;
        if (elapsed < 200) return;
        const idx = Math.min(text.length - 1, Math.floor((elapsed / estimatedDurationMs) * text.length));
        applyKaraoke(item, idx);
      }, 80);
    }

    function attachReadout(el) { nowReadingEl = el; }

    // ---------- Item picker / queue / loop logic ----------
    function setAllItems(items) {
      allItems = items.slice();
      lastClickedItem = null;
      abRange = null;
      pickingAB = null;
      updateLoopUi();
    }
    function rememberClicked(item) { lastClickedItem = item; }

    function indexOfItem(item) { return allItems.indexOf(item); }

    function playOne(item, onComplete) {
      synth.cancel();
      clearAllPlaying();
      currentItem = item;
      if (currentItem.el) currentItem.el.classList.add('playing');
      if (nowReadingEl) nowReadingEl.textContent = currentItem.plain;
      speak(item, () => {
        if (currentItem && currentItem.el) currentItem.el.classList.remove('playing');
        clearKaraoke(currentItem);
        currentItem = null;
        onComplete && onComplete();
      });
    }

    function clearAllPlaying() {
      document.querySelectorAll('.sentence.playing, .dialogue-line.playing').forEach(s => s.classList.remove('playing'));
    }

    function stop(reason) {
      if (synth) synth.cancel();
      clearFallback();
      if (currentItem) {
        if (currentItem.el) currentItem.el.classList.remove('playing');
        clearKaraoke(currentItem);
      }
      currentItem = null;
      queue = [];
      isPlaying = false;
      totalRepeatsRemaining = 0;
      if (nowReadingEl && reason) nowReadingEl.textContent = reason;
      updatePlayBtn();
    }

    // Single sentence with N-time loop
    function playSingle(item) {
      if (!synth) return;
      // If gesture is "set A/B", consume the click instead of playing.
      if (pickingAB === 'A') {
        abRange = { aIdx: indexOfItem(item), bIdx: abRange ? abRange.bIdx : -1 };
        pickingAB = abRange.bIdx < 0 ? 'B' : null;
        rememberClicked(item);
        flashAB(item, 'A');
        updateLoopUi();
        return;
      }
      if (pickingAB === 'B') {
        if (!abRange) abRange = { aIdx: -1, bIdx: -1 };
        abRange.bIdx = indexOfItem(item);
        pickingAB = null;
        rememberClicked(item);
        flashAB(item, 'B');
        updateLoopUi();
        return;
      }
      rememberClicked(item);
      const count = getLoopCount();
      totalRepeatsRemaining = (count === Infinity) ? Infinity : Math.max(1, count);
      isPlaying = true;
      updatePlayBtn();
      const playNext = () => {
        if (totalRepeatsRemaining === 0) { isPlaying = false; updatePlayBtn(); if (nowReadingEl) nowReadingEl.textContent = '完了 / done'; return; }
        if (totalRepeatsRemaining !== Infinity) totalRepeatsRemaining -= 1;
        playOne(item, playNext);
      };
      playNext();
    }

    // Play All — runs through allItems; loopCount applies to the whole pass
    function playAll() {
      if (!synth || allItems.length === 0) return;
      if (isPlaying) { stop('一時停止 / paused'); return; }
      const count = getLoopCount();
      totalRepeatsRemaining = (count === Infinity) ? Infinity : Math.max(1, count);
      isPlaying = true;
      updatePlayBtn();
      runPass();
    }

    function runPass() {
      if (totalRepeatsRemaining !== Infinity) totalRepeatsRemaining -= 1;
      queue = allItems.slice();
      stepQueue();
    }

    function stepQueue() {
      const next = queue.shift();
      if (!next) {
        // Pass complete. Loop?
        if (totalRepeatsRemaining > 0 || totalRepeatsRemaining === Infinity) {
          runPass();
        } else {
          stop('完了 / done');
        }
        return;
      }
      playOne(next, stepQueue);
    }

    // A-B range loop — independent flow
    function playAB() {
      if (!synth) return;
      if (!abRange || abRange.aIdx < 0 || abRange.bIdx < 0) return;
      if (isPlaying) { stop('一時停止 / paused'); return; }
      let lo = Math.min(abRange.aIdx, abRange.bIdx);
      let hi = Math.max(abRange.aIdx, abRange.bIdx);
      const slice = allItems.slice(lo, hi + 1);
      const count = getLoopCount();
      // For AB we treat default count of 1 as "loop indefinitely" — that's
      // the natural intent of A-B repeat. Honor explicit user choice otherwise.
      totalRepeatsRemaining = (count === 1 || count === Infinity) ? Infinity : count;
      isPlaying = true;
      updatePlayBtn();
      const runOnce = () => {
        if (totalRepeatsRemaining !== Infinity) totalRepeatsRemaining -= 1;
        queue = slice.slice();
        stepQueue();
      };
      // Patch stepQueue to repeat slice instead of allItems for AB.
      // We achieve that by overwriting allItems-aware behaviour:
      // Use a local stepper that defers to slice instead.
      let i = 0;
      const stepLocal = () => {
        if (!isPlaying) return;
        if (i >= slice.length) {
          if (totalRepeatsRemaining > 0 || totalRepeatsRemaining === Infinity) {
            if (totalRepeatsRemaining !== Infinity) totalRepeatsRemaining -= 1;
            i = 0;
          } else {
            stop('完了 / done');
            return;
          }
        }
        const it = slice[i++];
        playOne(it, stepLocal);
      };
      stepLocal();
    }

    function startPickingAB(which) {
      pickingAB = which;
      updateLoopUi();
    }
    function clearAB() {
      abRange = null;
      pickingAB = null;
      document.querySelectorAll('.sentence, .dialogue-line').forEach(el => {
        el.classList.remove('ab-a', 'ab-b');
      });
      updateLoopUi();
    }

    function flashAB(item, which) {
      if (!item || !item.el) return;
      // Remove the marker from any other element holding this letter
      document.querySelectorAll('.ab-' + which.toLowerCase()).forEach(el => {
        if (el !== item.el) el.classList.remove('ab-' + which.toLowerCase());
      });
      item.el.classList.add('ab-' + which.toLowerCase());
    }

    function updatePlayBtn() {
      const btn = document.getElementById('audio-play');
      if (!btn) return;
      btn.innerHTML = isPlaying
        ? '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    }

    function updateLoopUi() {
      const sel = document.getElementById('loop-select');
      if (sel) {
        const cur = (() => { try { return localStorage.getItem(LS.loop) || '1'; } catch { return '1'; } })();
        sel.value = cur;
      }
      const aPill = document.getElementById('ab-a-pill');
      const bPill = document.getElementById('ab-b-pill');
      const playAbBtn = document.getElementById('ab-play');
      const clearBtn = document.getElementById('ab-clear');
      if (aPill) {
        const txt = abRange && abRange.aIdx >= 0 ? ('A: ' + (abRange.aIdx + 1)) : (pickingAB === 'A' ? 'A: 选…' : 'A: —');
        aPill.textContent = txt;
        aPill.classList.toggle('on', !!(abRange && abRange.aIdx >= 0));
        aPill.classList.toggle('picking', pickingAB === 'A');
      }
      if (bPill) {
        const txt = abRange && abRange.bIdx >= 0 ? ('B: ' + (abRange.bIdx + 1)) : (pickingAB === 'B' ? 'B: 选…' : 'B: —');
        bPill.textContent = txt;
        bPill.classList.toggle('on', !!(abRange && abRange.bIdx >= 0));
        bPill.classList.toggle('picking', pickingAB === 'B');
      }
      const haveBoth = !!(abRange && abRange.aIdx >= 0 && abRange.bIdx >= 0);
      if (playAbBtn) {
        playAbBtn.disabled = !haveBoth;
        playAbBtn.classList.toggle('disabled', !haveBoth);
      }
      if (clearBtn) {
        clearBtn.style.display = (abRange && (abRange.aIdx >= 0 || abRange.bIdx >= 0)) ? '' : 'none';
      }
    }

    function reset() {
      stop();
      nowReadingEl = null;
      allItems = [];
      abRange = null;
      pickingAB = null;
      lastClickedItem = null;
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
    });

    return {
      attachReadout, setAllItems, rememberClicked,
      playSingle, playAll, playAB,
      reset, stop,
      getRate, setRate,
      getLoopCount, setLoopCount,
      startPickingAB, clearAB,
      updateLoopUi,
      isAvailable: () => !!synth,
    };
  })();

  // --- Top nav --------------------------------------------------------------
  function renderTopNav() {
    const links = [
      { href: '#/',           label: '課程',     match: /^#\/$/ },
      { href: '#/course',     label: '進度',     match: /^#\/course/ },
      { href: '#/grid',       label: '一覧',     match: /^#\/grid/ },
      { href: '#/reference',  label: '索引',     match: /^#\/reference/ },
    ];
    const hash = location.hash || '#/';
    const html = `
      <div class="topnav-inner">
        <a class="brand" href="#/">
          <span class="seal">課</span>
          <span class="brand-text">日本語五十課<small>NIHONGO 50 KA</small></span>
        </a>
        <nav class="nav-links">
          ${links.map(l => `<a href="${l.href}" class="${l.match.test(hash) ? 'active' : ''}">${l.label}</a>`).join('')}
        </nav>
        <span id="tts-status" class="tts-pill">音声 · loading…</span>
      </div>`;
    document.getElementById('topnav').innerHTML = html;
  }

  // --- Footer ---------------------------------------------------------------
  function renderFooter() {
    const totalVocab = LESSONS.reduce((s, l) => s + (l.vocabulary || []).length, 0);
    const totalGrammar = LESSONS.reduce((s, l) => s + (l.grammar || []).length, 0);
    const totalDialogues = LESSONS.length;
    const html = `
      <div class="site-footer-inner">
        <div class="ghost-mark">五十</div>
        <div class="footer-stats">
          <div>
            <div class="tag">Lessons</div>
            <div class="num">${LESSONS.length}<small>/50</small></div>
            <div class="meta">N5・N4・N3・N2 完整覆盖</div>
          </div>
          <div>
            <div class="tag">Vocabulary</div>
            <div class="num">${(totalVocab/1000).toFixed(1)}<small>k</small></div>
            <div class="meta">每条带词性、假名、罗马音、释义</div>
          </div>
          <div>
            <div class="tag">Grammar points</div>
            <div class="num">${totalGrammar}</div>
            <div class="meta">配例句,近义对比讲透</div>
          </div>
          <div>
            <div class="tag">Audio</div>
            <div class="num">∞</div>
            <div class="meta">浏览器原生 TTS · 三档变速</div>
          </div>
        </div>
        <div class="footer-grid">
          <div class="footer-credo">
            <span class="kicker kicker--accent">— Manifest</span>
            <h2>ことばを学ぶことは、<br>もう<span class="accent">一度</span>世界を見ること。</h2>
            <p>Built as a quiet, private place to study Japanese — no signup, no tracking, no API key. Open the page, press play. The kana will catch up.</p>
          </div>
          <div class="footer-col">
            <h4>Course</h4>
            <ul>
              <li><a href="#/course">N5 入門</a></li>
              <li><a href="#/course">N4 基礎</a></li>
              <li><a href="#/course">N3 展開</a></li>
              <li><a href="#/course">N2 熟達</a></li>
              <li><a href="#/grid">全 50 課一覧</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Reference</h4>
            <ul>
              <li><a href="#/reference?tab=vocab">語彙索引</a></li>
              <li><a href="#/reference?tab=grammar">文法体系</a></li>
              <li><a href="#/reference">クロスリンク</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="#/">Method</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener">Source ↗</a></li>
              <li><a href="#/">License · MIT</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-base">
          <div class="left">
            <div class="seal">課</div>
            <span>NIHONGO 50 KA · v2.0</span>
          </div>
          <div class="right">
            <span>Made for slow learning.</span>
            <span>${new Date().getFullYear()}</span>
          </div>
        </div>
      </div>`;
    document.getElementById('site-footer').innerHTML = html;
  }

  // --- Route: Home ----------------------------------------------------------
  function viewHome() {
    const p = getProgress();
    const completedCount = p.completed.length;
    const next = lessonById(p.current) || LESSONS[0];
    const pct = Math.round(completedCount / LESSONS.length * 100);

    const levels = ['N5','N4','N3','N2'].map(lv => {
      const list = lessonsByLevel(lv);
      const done = list.filter(l => p.completed.includes(l.id)).length;
      const isActive = next && next.level === lv;
      const labels = { N5:'入門', N4:'基礎', N3:'展開', N2:'熟達' };
      return `<a href="#/course" class="level-cell ${isActive ? 'active' : ''}">
        <div class="level-cell-tag">${lv}</div>
        <div class="level-cell-name">${labels[lv]}</div>
        <div class="level-cell-meta">${done}/${list.length} lessons</div>
      </a>`;
    }).join('');

    return `
    <section class="home">
      <div class="hero">
        <div class="hero-text">
          <div class="hero-kicker">N5 → N4 → N3 → N2 · A 600-hour journey</div>
          <h1 class="hero-title">
            ことばを、<br>ゆっくり<span class="accent">深</span>く。
            <span class="small">Fifty lessons. From 「私は田中です」 to reading a literary essay.</span>
          </h1>
          <p class="hero-lede">
            振假名・罗马音・中文三层显示;每句一键朗读;螺旋复现的语法体系;成人零基础到 N2 阅读水平的完整课程。一切就在浏览器里,无需注册、无需 API key、无需服务器。
          </p>
          <div class="hero-cta">
            <a class="btn" href="#/lesson/${next.id}">
              ${completedCount === 0 ? '課程を始める →' : '続ける →'}
            </a>
            <div class="resume-card">
              <span class="resume-card-label">${completedCount === 0 ? 'Start' : 'Continue'}</span>
              <span class="resume-card-text">第 ${next.id} 課 · ${stripTags(next.title.jp)}</span>
            </div>
          </div>
        </div>

        <div class="hero-canvas">
          <div class="progress-block">
            <div class="progress-block-label">your journey</div>
            <div class="progress-num">${completedCount}<small>/ ${LESSONS.length}</small></div>
            <div class="progress-bar"><span style="width:${pct}%"></span></div>
            <div class="progress-meta">
              <span>${pct}% 完了</span>
              <span>${LESSONS.length - completedCount} 課 残り</span>
            </div>
          </div>
          <div class="ink-character">課</div>
          <div class="levels-strip">${levels}</div>
        </div>
      </div>
    </section>`;
  }

  // --- Route: Course Map ----------------------------------------------------
  function viewCourse() {
    const p = getProgress();
    const cfg = {
      N5: { name: '入門', en: 'Foundation', desc: '「は・が・を・に・で」五个核心助词,です・ます 礼貌体,数字、时间、形容词、过去时。100 字短文。' },
      N4: { name: '基礎', en: 'Bridge',     desc: 'て形、可能形、たい・条件・授受、引用。能写一篇 300 字的日记。' },
      N3: { name: '展開', en: 'Expansion',  desc: '受身・使役・敬語、近义语法的精确辨析。能读懂报刊评论,写商务邮件。' },
      N2: { name: '熟達', en: 'Mastery',    desc: 'だ・である 书面体、议论文结构、抽象时间表达。能读散文、写论说文。' },
    };
    const next = lessonById(p.current) || LESSONS[0];
    const blocks = ['N5','N4','N3','N2'].map(lv => {
      const list = lessonsByLevel(lv);
      const done = list.filter(l => p.completed.includes(l.id)).length;
      const cells = list.map(l => {
        let cls = 'cell';
        if (p.completed.includes(l.id)) cls += ' done';
        else if (next && l.id === next.id) cls += ' next';
        else if (!p.completed.includes(l.id) && (!next || l.id > next.id)) cls += ' locked';
        return `<a class="${cls}" href="#/lesson/${l.id}">${pad2(l.id)}</a>`;
      }).join('');
      const isActive = next && next.level === lv;
      const pctLevel = list.length ? Math.round(done / list.length * 100) : 0;
      return `<div class="course-level ${isActive ? 'active' : ''}">
        <div class="level-head">
          <a href="#/grid?level=${lv}" style="text-decoration:none;color:inherit;display:contents">
            <span class="level-tag">${lv} · ${cfg[lv].name}</span>
            <div class="level-count">${done}<small>/${list.length}</small></div>
          </a>
        </div>
        <a href="#/grid?level=${lv}" style="text-decoration:none;color:inherit">
          <h3 class="level-name">${cfg[lv].name}<span class="level-name-en"> · ${cfg[lv].en}</span></h3>
          <p class="level-desc">${cfg[lv].desc}</p>
        </a>
        <div class="lessons-mini">${cells}</div>
        <div class="level-progress"><span style="width:${pctLevel}%"></span></div>
      </div>`;
    }).join('');

    const totalVocab = LESSONS.reduce((s, l) => s + (l.vocabulary || []).length, 0);
    const totalGrammar = LESSONS.reduce((s, l) => s + (l.grammar || []).length, 0);

    return `
    <section class="course">
      <header class="course-head">
        <div>
          <div class="kicker">— Course map</div>
          <h2 style="margin-top:18px">
            50 課を、4 つの階段で。
            <span class="small">From beginner kana to literary essays — a graded ascent.</span>
          </h2>
        </div>
        <p>各等级的设计尽量做到「上一级最后一课的句法,在下一级第一课会自然复现」。学完不是终点,是把工具用熟。</p>
      </header>
      <div class="course-map">${blocks}</div>
      <div class="course-foot">
        <span>continuous spiral · vocabulary recurs</span>
        <div class="stats">
          <div><span class="num">600h</span> total</div>
          <div><span class="num">${(totalVocab/1000).toFixed(1)}k</span> vocab</div>
          <div><span class="num">${totalGrammar}+</span> grammar</div>
          <div><span class="num">${LESSONS.length}</span> dialogues</div>
        </div>
      </div>
    </section>`;
  }

  // --- Route: Lesson Grid ---------------------------------------------------
  function viewGrid() {
    const p = getProgress();
    const params = parseHashQuery();
    const filterLevel = params.level || 'all';
    const search = (params.q || '').toLowerCase().trim();
    const next = lessonById(p.current) || LESSONS[0];

    const filtered = LESSONS.filter(l => {
      if (filterLevel !== 'all' && l.level !== filterLevel) return false;
      if (search) {
        const hay = (stripTags(l.title.jp) + ' ' + l.title.cn + ' ' + l.title.romaji + ' ' + l.title.en).toLowerCase();
        if (!hay.includes(search)) return false;
      }
      return true;
    });

    const completedTotal = p.completed.length;
    const remaining = LESSONS.length - completedTotal;

    function tallFor(idx, lesson) {
      if (lesson.id === next.id) return true;
      // tall for first lesson in each level group, alternating
      return (idx === 2 || idx === 8) && filtered.length > 6;
    }
    function illustChar(jp) { return stripTags(jp).slice(0, 1); }

    const cards = filtered.map((l, i) => {
      let cls = 'lesson-card';
      const completed = p.completed.includes(l.id);
      if (completed) cls += ' completed';
      const isNext = next && l.id === next.id;
      if (isNext) cls += ' next';
      const tall = tallFor(i, l);
      if (tall) cls += ' tall';
      const lvCls = 'l' + l.level.slice(1);
      const stripped = stripTags(l.title.jp);
      return `<a class="${cls}" href="#/lesson/${l.id}">
        <span class="card-id">No. ${pad2(l.id)}${isNext ? ' · Continue' : ''}</span>
        <div class="card-jp">${stripped}</div>
        ${tall ? `<div class="card-illust">${illustChar(l.title.jp)}</div>` : ''}
        <div class="card-meta">
          <span class="card-cn">${escapeHtml(l.title.cn)}</span>
          <span class="card-level ${lvCls}">${l.level}</span>
        </div>
      </a>`;
    }).join('');

    const filterOpts = [
      { key: 'all', label: 'All', count: LESSONS.length },
      { key: 'N5', label: 'N5 · 入門', count: lessonsByLevel('N5').length },
      { key: 'N4', label: 'N4 · 基礎', count: lessonsByLevel('N4').length },
      { key: 'N3', label: 'N3 · 展開', count: lessonsByLevel('N3').length },
      { key: 'N2', label: 'N2 · 熟達', count: lessonsByLevel('N2').length },
    ];

    return `
    <section class="grid-route">
      <aside class="gridrail">
        <div>
          <div class="gridrail-kicker">— Lesson Index</div>
          <h2 class="gridrail-title">課を選ぶ。</h2>
        </div>
        <label class="gridrail-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
          <input id="grid-search" type="search" placeholder="語彙・文法を検索…" value="${escapeHtml(search)}">
        </label>
        <div class="gridrail-section">
          <div class="gridrail-section-title">Level</div>
          <div class="filter-list">
            ${filterOpts.map(o => `<a class="filter-item ${filterLevel === o.key ? 'active' : ''}" href="#/grid?level=${o.key}${search ? '&q=' + encodeURIComponent(search) : ''}">${o.label} <span class="filter-count">${o.count}</span></a>`).join('')}
          </div>
        </div>
        <a class="resume-rail-card" href="#/lesson/${next.id}">
          <div class="resume-rail-tag">Continue</div>
          <div class="resume-rail-title">第 ${next.id} 課 · ${stripTags(next.title.jp)}</div>
          <div class="resume-rail-meta">${next.level} · ${escapeHtml(next.title.cn)}</div>
          <span class="resume-rail-cta">続ける →</span>
        </a>
      </aside>

      <div class="grid-wrap">
        <div class="grid-bar">
          <div class="grid-bar-left"><strong>${filtered.length}</strong> ${filtered.length === LESSONS.length ? 'lessons' : 'shown'} · <strong>${completedTotal}</strong> completed · <strong>${remaining}</strong> remaining</div>
        </div>
        <div class="grid">${cards || '<p style="color:var(--ink-3);font-family:var(--font-body-jp);padding:24px">該当なし</p>'}</div>
      </div>
    </section>`;
  }

  function bindGridSearch() {
    const input = document.getElementById('grid-search');
    if (!input) return;
    let t;
    input.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const params = parseHashQuery();
        const lv = params.level || 'all';
        const q = input.value.trim();
        const target = '#/grid?level=' + lv + (q ? '&q=' + encodeURIComponent(q) : '');
        history.replaceState(null, '', target);
        navigate();
      }, 200);
    });
  }

  // --- Route: Lesson Reader -------------------------------------------------
  function viewLesson(id) {
    const lesson = lessonById(id);
    if (!lesson) {
      return `<section class="reader-route"><div class="reader-main"><h1 class="lesson-title">課が見つかりません</h1><p style="margin-top:14px;color:var(--ink-3)">第 ${id} 課はまだ用意されていません。<a href="#/grid" class="txt-link">一覧に戻る</a></p></div></section>`;
    }
    const idx = LESSONS.findIndex(l => l.id === lesson.id);
    const prev = idx > 0 ? LESSONS[idx - 1] : null;
    const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;
    const prefs = getDisplayPrefs();
    const p = getProgress();
    const isCompleted = p.completed.includes(lesson.id);

    // Articles
    const articlesHtml = (lesson.articles || []).map((article, ai) => {
      const groupId = (article.kind === 'main' ? 'main' : 'sub') + '-' + ai;
      const sentences = (article.sentences || []).map((s, si) =>
        `<div class="sentence" data-group="${groupId}" data-index="${si}">
          <div class="jp-text">${annotateJp(s.jp, s.plain)}</div>
          <div class="romaji">${escapeHtml(s.romaji)}</div>
          <div class="translation">${escapeHtml(s.cn)}</div>
        </div>`
      ).join('');
      return `<section class="article" data-group="${groupId}">
        <div class="sec-label">${article.kind === 'main' ? '主篇 · main reading' : '配篇 · companion reading'}</div>
        <h2 class="article-title">${article.title.jp}<span class="small">${escapeHtml(article.title.cn)}</span></h2>
        <div class="sentence-list">${sentences}</div>
      </section>`;
    }).join('');

    // Dialogue
    let dialogueHtml = '';
    if (lesson.dialogue && (lesson.dialogue.lines || []).length) {
      const lines = lesson.dialogue.lines.map((line, i) =>
        `<div class="dialogue-line" data-group="dialogue" data-index="${i}">
          <div class="speaker">${escapeHtml(line.speaker)}</div>
          <div class="jp-text">${annotateJp(line.jp, line.plain)}</div>
          <div class="romaji">${escapeHtml(line.romaji)}</div>
          <div class="translation">${escapeHtml(line.cn)}</div>
        </div>`
      ).join('');
      dialogueHtml = `<section class="article" data-group="dialogue">
        <div class="sec-label">対話 · dialogue</div>
        <div class="dialogue-scene">${escapeHtml(lesson.dialogue.scene.jp)} / ${escapeHtml(lesson.dialogue.scene.cn)}</div>
        ${lines}
      </section>`;
    }

    // Questions
    let questionsHtml = '';
    if ((lesson.questions || []).length) {
      questionsHtml = `<section>
        <div class="sec-label">理解問題 · comprehension</div>
        ${lesson.questions.map((qa, i) => `
          <div class="question">
            <div class="question-q">
              <span class="q-mark">Q${i + 1}</span>
              <div class="jp-text" style="font-size:18px">${qa.q.jp}</div>
              <div class="romaji">${escapeHtml(qa.q.romaji)}</div>
              <div class="translation">${escapeHtml(qa.q.cn)}</div>
            </div>
            <div class="question-a">
              <span class="q-mark">A</span>
              <div class="jp-text" style="font-size:18px">${qa.a.jp}</div>
              <div class="romaji">${escapeHtml(qa.a.romaji)}</div>
              <div class="translation">${escapeHtml(qa.a.cn)}</div>
              ${qa.hint ? `<div class="question-hint">提示:${escapeHtml(qa.hint)}</div>` : ''}
            </div>
          </div>`).join('')}
      </section>`;
    }

    // Vocabulary
    const vocabHtml = (lesson.vocabulary || []).map(v =>
      `<div class="vocab-row">
        <span class="v-jp">${escapeHtml(v.jp)}</span>
        <span class="v-kana">${escapeHtml(v.kana)}</span>
        <span class="v-pos">${escapeHtml(v.pos || '')}</span>
        <span class="v-mean">${escapeHtml(v.meaning)}</span>
      </div>`
    ).join('');

    // Grammar
    const grammarHtml = (lesson.grammar || []).map(g =>
      `<div class="grammar-point">
        <div class="grammar-pat-row">
          <span class="grammar-pat">${escapeHtml(g.pattern)}</span>
          <span class="grammar-name">${escapeHtml(g.name)}</span>
        </div>
        <div class="grammar-explain">${escapeHtml(g.explain)}</div>
        ${(g.examples || []).length ? `<div class="grammar-examples">${
          g.examples.map(e => `<div class="grammar-example"><div class="ex-jp">${e.jp}</div><div class="ex-cn">${escapeHtml(e.cn)}</div></div>`).join('')
        }</div>` : ''}
      </div>`
    ).join('');

    // Right rail
    const goalsHtml = (lesson.goals || []).map(g => `<li>${escapeHtml(g)}</li>`).join('');
    const spotsHtml = (lesson.grammar || []).slice(0, 6).map(g =>
      `<div class="spot"><div class="spot-pat">${escapeHtml(g.pattern)}</div><div class="spot-name">${escapeHtml(g.name)}</div></div>`
    ).join('');
    const ctxVocabHtml = (lesson.vocabulary || []).slice(0, 14).map(v =>
      `<div class="ctx-vocab-item"><span class="v-jp">${escapeHtml(v.jp)}</span><span class="v-mean">${escapeHtml(v.meaning)}</span></div>`
    ).join('');

    const navFoot = `
      <div class="lesson-nav-foot">
        ${prev ? `<a href="#/lesson/${prev.id}" class="prev">
          <span class="nav-tag">← 第 ${prev.id} 課</span>
          <span class="nav-title">${stripTags(prev.title.jp)}</span>
        </a>` : '<span></span>'}
        ${next ? `<a href="#/lesson/${next.id}" class="next">
          <span class="nav-tag">第 ${next.id} 課 →</span>
          <span class="nav-title">${stripTags(next.title.jp)}</span>
        </a>` : '<span></span>'}
      </div>`;

    return `
    <section class="reader-route" data-lesson-id="${lesson.id}">
      <main class="reader-main">
        <header class="reader-head">
          <div>
            <div class="crumb"><a href="#/grid">課程</a><span class="sep">/</span><a href="#/grid?level=${lesson.level}">${lesson.level} · ${({N5:'入門',N4:'基礎',N3:'展開',N2:'熟達'})[lesson.level]}</a><span class="sep">/</span><span>第 ${lesson.id} 課</span></div>
            <div class="lesson-num">${lesson.level} — Lesson ${pad2(lesson.id)}${isCompleted ? ' · 完了' : ''}</div>
            <h1 class="lesson-title">${lesson.title.jp}</h1>
            <div class="lesson-en">${escapeHtml(lesson.title.romaji)} · ${escapeHtml(lesson.title.en)}</div>
          </div>
          <div class="reader-actions">
            <button class="icon-btn ${isCompleted ? 'active' : ''}" id="mark-done" title="${isCompleted ? '完了済み' : '完了に印を付ける'}">
              ${isCompleted
                ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>'
                : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/></svg>'}
            </button>
          </div>
        </header>

        ${articlesHtml}
        ${dialogueHtml}
        ${questionsHtml}

        <div class="sec-label">語彙 · vocabulary <span style="color:var(--ink-4);letter-spacing:0.05em;text-transform:none">${(lesson.vocabulary || []).length} entries</span></div>
        <div class="vocab-grid">${vocabHtml}</div>

        <div class="sec-label">文法 · grammar</div>
        <div>${grammarHtml}</div>

        ${navFoot}
      </main>

      <aside class="ctxrail">
        <div class="ctx-toggles">
          <button class="toggle ${prefs.furigana ? 'active' : ''}" data-pref="furigana">FURIGANA</button>
          <button class="toggle ${prefs.romaji ? 'active' : ''}" data-pref="romaji">ROMAJI</button>
          <button class="toggle ${prefs.translation ? 'active' : ''}" data-pref="translation">中文</button>
        </div>

        <div class="meta-card">
          <div class="meta-card-title">学習目標</div>
          <ul class="goals">${goalsHtml || '<li style="color:var(--ink-4)">—</li>'}</ul>
        </div>

        <div class="meta-card">
          <div class="meta-card-title">本課の文法 <small>${(lesson.grammar || []).length} points</small></div>
          <div class="spot-list">${spotsHtml}</div>
        </div>

        <div class="meta-card" style="flex:1">
          <div class="meta-card-title">語彙 <small>${(lesson.vocabulary || []).length} entries</small></div>
          <div class="ctx-vocab-list">${ctxVocabHtml}</div>
        </div>
      </aside>

      <div class="audio-rail">
        <button class="play" id="audio-play" title="Play All / Pause">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <div class="audio-rail-info">
          <div class="audio-now-block">
            <div class="audio-now-label">Now reading</div>
            <div class="audio-now-text" id="audio-now-text">クリックで再生 / Click sentence to play</div>
          </div>
        </div>
        <div class="audio-actions">
          <button class="pill ab-pill" id="ab-a-pill" title="設 A — 区間ループの始点">A: —</button>
          <button class="pill ab-pill" id="ab-b-pill" title="設 B — 区間ループの終点">B: —</button>
          <button class="pill" id="ab-play" title="A→B を繰り返す" disabled>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
            <span>A↔B</span>
          </button>
          <button class="pill ab-clear" id="ab-clear" title="A/B 解除" style="display:none">×</button>
          <select id="loop-select" title="Loop count">
            <option value="1">1×</option>
            <option value="2">2×</option>
            <option value="3">3×</option>
            <option value="5">5×</option>
            <option value="inf">∞</option>
          </select>
          <select id="speed-select" title="Speed">
            <option value="0.7">0.7×</option>
            <option value="0.85">0.85×</option>
            <option value="1.0">1.0×</option>
          </select>
        </div>
      </div>
    </section>`;
  }

  function bindLesson(lesson) {
    if (!lesson) return;
    applyDisplayPrefs(getDisplayPrefs());
    TTS.attachReadout(document.getElementById('audio-now-text'));

    // Build playable items per group, in DOM order.
    // `el` = the .sentence or .dialogue-line container (has .kchar spans inside)
    const playables = [];
    document.querySelectorAll('.reader-main .sentence, .reader-main .dialogue-line').forEach(el => {
      const group = el.dataset.group;
      const index = parseInt(el.dataset.index, 10);
      let plain = '';
      if (group === 'dialogue') {
        plain = lesson.dialogue?.lines?.[index]?.plain || '';
      } else {
        const m = group.match(/^(main|sub)-(\d+)$/);
        if (m) {
          const ai = parseInt(m[2], 10);
          plain = lesson.articles?.[ai]?.sentences?.[index]?.plain || '';
        }
      }
      const item = { el, plain };
      el.addEventListener('click', () => TTS.playSingle(item));
      playables.push(item);
    });

    TTS.setAllItems(playables);

    document.getElementById('audio-play')?.addEventListener('click', () => TTS.playAll());

    // Loop count select
    const loopSel = document.getElementById('loop-select');
    if (loopSel) {
      loopSel.addEventListener('change', () => TTS.setLoopCount(loopSel.value));
    }

    // A/B controls
    document.getElementById('ab-a-pill')?.addEventListener('click', () => TTS.startPickingAB('A'));
    document.getElementById('ab-b-pill')?.addEventListener('click', () => TTS.startPickingAB('B'));
    document.getElementById('ab-play')?.addEventListener('click', () => TTS.playAB());
    document.getElementById('ab-clear')?.addEventListener('click', () => TTS.clearAB());

    TTS.updateLoopUi();

    // Display prefs toggles
    document.querySelectorAll('.ctx-toggles .toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.pref;
        const prefs = getDisplayPrefs();
        prefs[key] = !prefs[key];
        setDisplayPrefs(prefs);
        btn.classList.toggle('active', prefs[key]);
      });
    });

    // Speed select
    const sel = document.getElementById('speed-select');
    if (sel) {
      sel.value = String(TTS.getRate());
      sel.addEventListener('change', () => TTS.setRate(parseFloat(sel.value)));
    }

    // Mark complete
    document.getElementById('mark-done')?.addEventListener('click', () => {
      markCompleted(lesson.id);
      const btn = document.getElementById('mark-done');
      btn.classList.add('active');
      btn.title = '完了済み';
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
      const num = document.querySelector('.lesson-num');
      if (num && !num.textContent.includes('完了')) num.textContent += ' · 完了';
    });
  }

  // --- Route: Reference -----------------------------------------------------
  function viewReference() {
    const params = parseHashQuery();
    const tab = params.tab || 'both';
    const alpha = params.alpha || 'あ';

    // Compose vocab (deduplicate by jp+kana, keep first occurrence with lesson #)
    const vocabMap = new Map();
    LESSONS.forEach(l => {
      (l.vocabulary || []).forEach(v => {
        const key = (v.jp || '') + '|' + (v.kana || '');
        if (!vocabMap.has(key)) vocabMap.set(key, { ...v, lessonId: l.id });
      });
    });
    let vocab = Array.from(vocabMap.values());
    // Sort by kana
    vocab.sort((a, b) => (a.kana || '').localeCompare(b.kana || '', 'ja'));

    // alpha filter on first kana (group katakana to カ)
    const groupOf = (kana) => {
      const c = (kana || '')[0] || '';
      if (!c) return '?';
      const code = c.charCodeAt(0);
      // katakana 0x30A0–0x30FF → "カ" group
      if (code >= 0x30A0 && code <= 0x30FF) return 'カ';
      // hiragana groups
      if ('あいうえお'.includes(c)) return 'あ';
      if ('かがきぎくぐけげこご'.includes(c)) return 'か';
      if ('さざしじすずせぜそぞ'.includes(c)) return 'さ';
      if ('ただちぢっつづてでとど'.includes(c)) return 'た';
      if ('なにぬねの'.includes(c)) return 'な';
      if ('はばぱひびぴふぶぷへべぺほぼぽ'.includes(c)) return 'は';
      if ('まみむめも'.includes(c)) return 'ま';
      if ('やゆよ'.includes(c)) return 'や';
      if ('らりるれろ'.includes(c)) return 'ら';
      if ('わをん'.includes(c)) return 'わ';
      return '他';
    };

    const filteredVocab = (alpha === 'all') ? vocab : vocab.filter(v => groupOf(v.kana) === alpha);

    // Compose grammar
    const grammarPts = [];
    LESSONS.forEach(l => {
      (l.grammar || []).forEach(g => grammarPts.push({ ...g, lessonId: l.id, level: l.level }));
    });

    const totalVocab = vocab.length;
    const totalGrammar = grammarPts.length;

    const alphas = ['あ','か','さ','た','な','は','ま','や','ら','わ','カ'];

    const vocabRows = filteredVocab.slice(0, 200).map(v =>
      `<a class="ref-vocab-row" href="#/lesson/${v.lessonId}">
        <span class="v-jp" style="font-family:var(--font-display-jp);font-size:16px">${escapeHtml(v.jp)}</span>
        <span class="v-kana" style="font-family:var(--font-body-jp);color:var(--ink-2);font-size:13px">${escapeHtml(v.kana)}</span>
        <span class="v-pos" style="font-family:var(--font-mono);font-size:9px;color:var(--ink-3);letter-spacing:0.06em;padding:2px 8px;border:1px solid var(--line);border-radius:999px;text-align:center;justify-self:start">${escapeHtml(v.pos || '')}</span>
        <span class="v-mean" style="font-family:var(--font-body-jp);font-size:13px;color:var(--ink-2)">${escapeHtml(v.meaning)}</span>
        <span class="v-lesson" style="font-family:var(--font-mono);font-size:11px;color:var(--ink-4);text-align:right">L${pad2(v.lessonId)}</span>
      </a>`
    ).join('');

    const gramCards = grammarPts.slice(0, 24).map(g =>
      `<a class="gram-card" href="#/lesson/${g.lessonId}">
        <span class="gram-pat">${escapeHtml(g.pattern)}</span>
        <h4 class="gram-name">${escapeHtml(g.name)}</h4>
        <p class="gram-desc">${escapeHtml(g.explain.length > 130 ? g.explain.slice(0, 130) + '…' : g.explain)}</p>
        <div class="gram-meta"><span>L${pad2(g.lessonId)} · ${g.level}</span><span>${({N5:'入門',N4:'基礎',N3:'展開',N2:'熟達'})[g.level]}</span></div>
      </a>`
    ).join('');

    const showVocab = tab === 'both' || tab === 'vocab';
    const showGram = tab === 'both' || tab === 'grammar';

    return `
    <section class="ref-route">
      <header class="ref-head">
        <div>
          <div class="kicker">— Reference index</div>
          <h2 style="margin-top:14px">語彙と文法、すべて一覧で。<span class="small">All ${totalVocab.toLocaleString()} vocabulary entries and ${totalGrammar} grammar points, cross-linked to lessons.</span></h2>
        </div>
        <div class="ref-tabs">
          <a class="ref-tab ${tab === 'both' ? 'active' : ''}" href="#/reference?tab=both">Both</a>
          <a class="ref-tab ${tab === 'vocab' ? 'active' : ''}" href="#/reference?tab=vocab">Vocabulary</a>
          <a class="ref-tab ${tab === 'grammar' ? 'active' : ''}" href="#/reference?tab=grammar">Grammar</a>
        </div>
      </header>

      <div class="ref-split" style="${showVocab && showGram ? '' : 'grid-template-columns: 1fr'}">
        ${showVocab ? `
        <section>
          <div class="ref-section-head">
            <h3>語彙索引</h3>
            <small>${filteredVocab.length} entries · sorted by reading</small>
          </div>
          <div class="alpha-strip">
            ${alphas.map(a => `<a href="#/reference?tab=${tab}&alpha=${a}" class="${alpha === a ? 'on' : ''}" style="text-decoration:none;display:inline-block;padding:5px 10px;border-radius:4px;color:${alpha === a ? 'var(--bg)' : 'var(--ink-3)'};border:1px solid ${alpha === a ? 'var(--ink)' : 'var(--line)'};background:${alpha === a ? 'var(--ink)' : 'transparent'};font-family:var(--font-mono);font-size:11px">${a}</a>`).join('')}
          </div>
          <div class="ref-vocab-table">${vocabRows || '<p style="padding:24px;color:var(--ink-3)">No vocabulary in this group.</p>'}</div>
          ${filteredVocab.length > 200 ? `<p style="margin-top:14px;font-family:var(--font-mono);font-size:11px;color:var(--ink-4)">Showing first 200 of ${filteredVocab.length}. Use search or change group.</p>` : ''}
        </section>` : ''}

        ${showGram ? `
        <section>
          <div class="ref-section-head">
            <h3>文法体系</h3>
            <small>${totalGrammar} patterns · clustered by lesson</small>
          </div>
          <div class="gram-deck">${gramCards}</div>
          ${grammarPts.length > 24 ? `<p style="margin-top:14px;font-family:var(--font-mono);font-size:11px;color:var(--ink-4)">Showing first 24 of ${grammarPts.length}. Open a lesson to see its full grammar set.</p>` : ''}
        </section>` : ''}
      </div>
    </section>`;
  }

  // --- Router ---------------------------------------------------------------
  function parseHashQuery() {
    const h = location.hash || '';
    const q = h.split('?')[1];
    if (!q) return {};
    const out = {};
    q.split('&').forEach(kv => {
      const [k, v] = kv.split('=');
      if (k) out[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return out;
  }

  function navigate() {
    TTS.reset();
    const hash = location.hash || '#/';
    const path = hash.split('?')[0];
    let html = '';
    let onMount = null;

    if (path === '#/' || path === '') {
      html = viewHome();
    } else if (path === '#/course') {
      html = viewCourse();
    } else if (path === '#/grid') {
      html = viewGrid();
      onMount = bindGridSearch;
    } else if (path === '#/reference') {
      html = viewReference();
    } else if (path.startsWith('#/lesson/')) {
      const id = parseInt(path.slice('#/lesson/'.length), 10);
      const lesson = lessonById(id);
      html = viewLesson(id);
      onMount = () => bindLesson(lesson);
    } else {
      html = `<section class="home"><div class="hero"><div class="hero-text">
        <div class="hero-kicker">404</div>
        <h1 class="hero-title">そのページはありません。</h1>
        <p class="hero-lede">指定的路径不存在。</p>
        <a class="btn" href="#/">トップに戻る →</a>
      </div></div></section>`;
    }

    document.getElementById('app').innerHTML = html;
    renderTopNav();
    if (onMount) onMount();
    window.scrollTo({ top: 0, behavior: 'instant' });
    applyDisplayPrefs(getDisplayPrefs());
  }

  function refreshTtsAndProgress() {
    // Re-render top nav (no-op for tts) and progress bar on home
    if ((location.hash || '#/').split('?')[0] === '#/') {
      // Refresh home view to update progress numbers
      navigate();
    }
  }

  // --- Boot -----------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    renderFooter();
    navigate();
  });
  window.addEventListener('hashchange', navigate);

})();
