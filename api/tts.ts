import type { VercelRequest, VercelResponse } from '@vercel/node';
import { isConfigured, synthesizeMp3, MinimaxError } from './_minimax.js';
import { DEFAULT_VOICE_ID } from './_voices.js';

function asString(v: unknown, fallback = ''): string {
  if (typeof v === 'string') return v;
  if (Array.isArray(v) && typeof v[0] === 'string') return v[0];
  return fallback;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  const text = asString(req.query.text).trim();
  const voice = asString(req.query.voice, DEFAULT_VOICE_ID);
  const speedRaw = Number(asString(req.query.speed, '1'));
  const speed = Number.isFinite(speedRaw) ? Math.min(2, Math.max(0.5, speedRaw)) : 1;

  if (!text || text.length > 2000) {
    res.status(400).json({ error: 'invalid_text' });
    return;
  }
  if (!isConfigured()) {
    res.status(503).json({ error: 'minimax_not_configured' });
    return;
  }

  try {
    const mp3 = await synthesizeMp3({ text, voiceId: voice, speed });
    // Vercel CDN caches per full URL; immutable since text+voice+speed determine output.
    res.setHeader('Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable');
    res.setHeader('Content-Type', 'audio/mpeg');
    res.status(200).send(mp3);
  } catch (err: unknown) {
    if (err instanceof MinimaxError) {
      res.status(502).json({ error: 'minimax_failure', detail: err.message });
      return;
    }
    res.status(500).json({ error: 'tts_failure' });
  }
}
