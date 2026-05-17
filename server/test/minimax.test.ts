import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createServer, type Server } from 'node:http';
import { AddressInfo } from 'node:net';
import { synthesize, MinimaxError } from '../src/minimax.js';

interface MockHandler {
  status: number;
  body: string;
  capture?: { body?: string; auth?: string; url?: string };
}

async function startMock(handler: MockHandler): Promise<{ url: string; close: () => Promise<void> }> {
  const server: Server = createServer((req, res) => {
    let chunks = '';
    req.on('data', (c) => (chunks += c));
    req.on('end', () => {
      if (handler.capture) {
        handler.capture.body = chunks;
        handler.capture.auth = req.headers.authorization;
        handler.capture.url = req.url;
      }
      res.statusCode = handler.status;
      res.setHeader('Content-Type', 'application/json');
      res.end(handler.body);
    });
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = (server.address() as AddressInfo).port;
  return {
    url: `http://127.0.0.1:${port}`,
    close: () => new Promise<void>((resolve) => server.close(() => resolve())),
  };
}

describe('synthesize', () => {
  it('returns mp3 bytes on success', async () => {
    const hex = 'fffb900012345678';
    const capture: { body?: string; auth?: string; url?: string } = {};
    const mock = await startMock({
      status: 200,
      body: JSON.stringify({ base_resp: { status_code: 0 }, data: { audio: hex } }),
      capture,
    });
    try {
      const buf = await synthesize(
        { apiKey: 'k', groupId: 'g', apiBase: mock.url, model: 'speech-02-hd' },
        { text: 'おはよう', voiceId: 'Japanese_KindLady', speed: 1.0 },
      );
      expect(buf.equals(Buffer.from(hex, 'hex'))).toBe(true);
      expect(capture.auth).toBe('Bearer k');
      expect(capture.url).toContain('GroupId=g');
      const sent = JSON.parse(capture.body ?? '{}');
      expect(sent.text).toBe('おはよう');
      expect(sent.voice_setting.voice_id).toBe('Japanese_KindLady');
      expect(sent.audio_setting.format).toBe('mp3');
    } finally {
      await mock.close();
    }
  });

  it('throws MinimaxError on non-2xx', async () => {
    const mock = await startMock({ status: 401, body: 'unauthorized' });
    try {
      await expect(
        synthesize(
          { apiKey: 'bad', groupId: 'g', apiBase: mock.url, model: 'm' },
          { text: 't', voiceId: 'v', speed: 1 },
        ),
      ).rejects.toBeInstanceOf(MinimaxError);
    } finally {
      await mock.close();
    }
  });

  it('throws MinimaxError on non-zero base_resp status_code', async () => {
    const mock = await startMock({
      status: 200,
      body: JSON.stringify({ base_resp: { status_code: 1004, status_msg: 'invalid voice' } }),
    });
    try {
      await expect(
        synthesize(
          { apiKey: 'k', groupId: 'g', apiBase: mock.url, model: 'm' },
          { text: 't', voiceId: 'v', speed: 1 },
        ),
      ).rejects.toThrow(/1004/);
    } finally {
      await mock.close();
    }
  });

  it('throws MinimaxError when data.audio missing', async () => {
    const mock = await startMock({
      status: 200,
      body: JSON.stringify({ base_resp: { status_code: 0 }, data: {} }),
    });
    try {
      await expect(
        synthesize(
          { apiKey: 'k', groupId: 'g', apiBase: mock.url, model: 'm' },
          { text: 't', voiceId: 'v', speed: 1 },
        ),
      ).rejects.toThrow(/missing data.audio/);
    } finally {
      await mock.close();
    }
  });
});
