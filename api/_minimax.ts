// Lightweight MiniMax T2A v2 client for Vercel serverless functions.
// Mirrors server/src/minimax.ts but avoids the undici dependency so the
// function bundle stays small. The full Fastify backend (server/) remains the
// source of truth for local dev and self-hosting.

export interface SynthInput {
  text: string;
  voiceId: string;
  speed: number;
}

export class MinimaxError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = 'MinimaxError';
  }
}

const API_BASE = process.env.MINIMAX_API_BASE || 'https://api.minimax.chat';
const MODEL = process.env.MINIMAX_MODEL || 'speech-02-hd';

export function isConfigured(): boolean {
  return Boolean(process.env.MINIMAX_API_KEY && process.env.MINIMAX_GROUP_ID);
}

export async function synthesizeMp3(input: SynthInput): Promise<Buffer> {
  const apiKey = process.env.MINIMAX_API_KEY;
  const groupId = process.env.MINIMAX_GROUP_ID;
  if (!apiKey || !groupId) throw new MinimaxError('minimax_not_configured');

  const url = `${API_BASE.replace(/\/+$/, '')}/v1/t2a_v2?GroupId=${encodeURIComponent(groupId)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      text: input.text,
      stream: false,
      voice_setting: { voice_id: input.voiceId, speed: input.speed, vol: 1, pitch: 0 },
      audio_setting: { sample_rate: 32000, bitrate: 128000, format: 'mp3', channel: 1 },
    }),
  });

  if (!res.ok) {
    throw new MinimaxError(`minimax_http_${res.status}`, res.status);
  }
  const json = (await res.json()) as { base_resp?: { status_code?: number; status_msg?: string }; data?: { audio?: string } };
  const code = json.base_resp?.status_code;
  if (code !== undefined && code !== 0) {
    throw new MinimaxError(`minimax_status_${code}: ${json.base_resp?.status_msg ?? ''}`);
  }
  const hex = json.data?.audio;
  if (!hex) throw new MinimaxError('minimax_missing_audio');
  return Buffer.from(hex, 'hex');
}
