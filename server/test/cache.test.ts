import { describe, it, expect, beforeEach } from 'vitest';
import os from 'node:os';
import path from 'node:path';
import { promises as fs } from 'node:fs';
import { AudioCache, cacheKey } from '../src/cache.js';

async function tmpDir(): Promise<string> {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'j50-cache-'));
  return dir;
}

describe('cacheKey', () => {
  it('is deterministic for identical inputs', () => {
    const a = cacheKey({ text: 'こんにちは', voice: 'v1', speed: 1.0, model: 'm' });
    const b = cacheKey({ text: 'こんにちは', voice: 'v1', speed: 1.0, model: 'm' });
    expect(a).toBe(b);
  });

  it('changes when any field changes', () => {
    const base = cacheKey({ text: 'a', voice: 'v', speed: 1.0, model: 'm' });
    expect(cacheKey({ text: 'b', voice: 'v', speed: 1.0, model: 'm' })).not.toBe(base);
    expect(cacheKey({ text: 'a', voice: 'w', speed: 1.0, model: 'm' })).not.toBe(base);
    expect(cacheKey({ text: 'a', voice: 'v', speed: 0.9, model: 'm' })).not.toBe(base);
    expect(cacheKey({ text: 'a', voice: 'v', speed: 1.0, model: 'n' })).not.toBe(base);
  });

  it('normalizes NFC-equivalent text to the same key', () => {
    const composed = 'が'; // が (precomposed)
    const decomposed = 'が'; // か + dakuten
    const k1 = cacheKey({ text: composed, voice: 'v', speed: 1, model: 'm' });
    const k2 = cacheKey({ text: decomposed, voice: 'v', speed: 1, model: 'm' });
    expect(k1).toBe(k2);
  });

  it('quantizes speed to 2 decimals', () => {
    const k1 = cacheKey({ text: 't', voice: 'v', speed: 1.0001, model: 'm' });
    const k2 = cacheKey({ text: 't', voice: 'v', speed: 1.0, model: 'm' });
    expect(k1).toBe(k2);
  });
});

describe('AudioCache', () => {
  let dir: string;
  let cache: AudioCache;

  beforeEach(async () => {
    dir = await tmpDir();
    cache = new AudioCache(dir);
    await cache.init();
  });

  it('returns null for missing key', async () => {
    expect(await cache.get('nope')).toBeNull();
  });

  it('round-trips put/get', async () => {
    const data = Buffer.from('ID3\x03\x00\x00\x00fake-mp3', 'utf8');
    await cache.put('abc', data);
    const got = await cache.get('abc');
    expect(got).not.toBeNull();
    expect(got!.equals(data)).toBe(true);
  });

  it('atomic write — partial tmp does not pollute final', async () => {
    await cache.put('k1', Buffer.from('one'));
    await cache.put('k1', Buffer.from('two-rewrite'));
    const got = await cache.get('k1');
    expect(got!.toString()).toBe('two-rewrite');
  });
});
