import { describe, it, expect, beforeEach, vi } from 'vitest';
import os from 'node:os';
import path from 'node:path';
import { promises as fs } from 'node:fs';
import { buildApp } from '../src/app.js';
import { loadConfig } from '../src/config.js';
import { AudioCache } from '../src/cache.js';

async function tmpDir(prefix = 'j50-app-'): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), prefix));
}

describe('app routes', () => {
  let dir: string;

  beforeEach(async () => {
    dir = await tmpDir();
  });

  it('GET /api/health reports minimax=false without keys', async () => {
    const config = loadConfig({ CACHE_DIR: dir });
    const app = await buildApp({ config, cache: new AudioCache(dir) });
    const res = await app.inject({ method: 'GET', url: '/api/health' });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toMatchObject({ ok: true, minimax: false });
    await app.close();
  });

  it('GET /api/voices returns the catalog', async () => {
    const config = loadConfig({ CACHE_DIR: dir });
    const app = await buildApp({ config, cache: new AudioCache(dir) });
    const res = await app.inject({ method: 'GET', url: '/api/voices' });
    expect(res.statusCode).toBe(200);
    const body = res.json() as { default: string; voices: Array<{ id: string }> };
    expect(body.default).toBeTruthy();
    expect(body.voices.length).toBeGreaterThan(0);
    expect(body.voices.some((v) => v.id === body.default)).toBe(true);
    await app.close();
  });

  it('GET /api/tts returns 400 on empty text', async () => {
    const config = loadConfig({
      CACHE_DIR: dir,
      MINIMAX_API_KEY: 'k',
      MINIMAX_GROUP_ID: 'g',
    });
    const app = await buildApp({
      config,
      cache: new AudioCache(dir),
      synthesize: async () => Buffer.from('x'),
    });
    const res = await app.inject({ method: 'GET', url: '/api/tts?text=' });
    expect(res.statusCode).toBe(400);
    await app.close();
  });

  it('GET /api/tts returns 503 when MiniMax not configured', async () => {
    const config = loadConfig({ CACHE_DIR: dir });
    const app = await buildApp({ config, cache: new AudioCache(dir) });
    const res = await app.inject({ method: 'GET', url: '/api/tts?text=hello' });
    expect(res.statusCode).toBe(503);
    expect(res.json()).toMatchObject({ error: 'minimax_not_configured' });
    await app.close();
  });

  it('GET /api/tts MISS then HIT — synth called once', async () => {
    const config = loadConfig({
      CACHE_DIR: dir,
      MINIMAX_API_KEY: 'k',
      MINIMAX_GROUP_ID: 'g',
    });
    const synth = vi.fn(async () => Buffer.from([0xff, 0xfb, 0x90, 0x00]));
    const app = await buildApp({ config, cache: new AudioCache(dir), synthesize: synth });

    const first = await app.inject({ method: 'GET', url: '/api/tts?text=おはよう&voice=Japanese_KindLady&speed=1' });
    expect(first.statusCode).toBe(200);
    expect(first.headers['x-cache']).toBe('MISS');
    expect(first.headers['content-type']).toContain('audio/mpeg');

    const second = await app.inject({ method: 'GET', url: '/api/tts?text=おはよう&voice=Japanese_KindLady&speed=1' });
    expect(second.statusCode).toBe(200);
    expect(second.headers['x-cache']).toBe('HIT');

    expect(synth).toHaveBeenCalledTimes(1);
    expect(second.rawPayload.equals(first.rawPayload)).toBe(true);
    await app.close();
  });

  it('GET /api/tts surfaces 502 on upstream MinimaxError', async () => {
    const { MinimaxError } = await import('../src/minimax.js');
    const config = loadConfig({
      CACHE_DIR: dir,
      MINIMAX_API_KEY: 'k',
      MINIMAX_GROUP_ID: 'g',
    });
    const app = await buildApp({
      config,
      cache: new AudioCache(dir),
      synthesize: async () => {
        throw new MinimaxError('quota exceeded', 429);
      },
    });
    const res = await app.inject({ method: 'GET', url: '/api/tts?text=hi' });
    expect(res.statusCode).toBe(502);
    expect(res.json()).toMatchObject({ error: 'minimax_failure' });
    await app.close();
  });

  it('different voice produces different cache entry', async () => {
    const config = loadConfig({
      CACHE_DIR: dir,
      MINIMAX_API_KEY: 'k',
      MINIMAX_GROUP_ID: 'g',
    });
    let n = 0;
    const synth = vi.fn(async () => Buffer.from([n++ & 0xff]));
    const app = await buildApp({ config, cache: new AudioCache(dir), synthesize: synth });
    await app.inject({ method: 'GET', url: '/api/tts?text=x&voice=Japanese_KindLady' });
    await app.inject({ method: 'GET', url: '/api/tts?text=x&voice=Japanese_DecentYoungMan' });
    expect(synth).toHaveBeenCalledTimes(2);
    await app.close();
  });
});
