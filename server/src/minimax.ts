import { request } from 'undici';

export interface MinimaxOptions {
  apiKey: string;
  groupId: string;
  apiBase: string;
  model: string;
}

export interface SynthRequest {
  text: string;
  voiceId: string;
  speed: number;
}

export class MinimaxError extends Error {
  constructor(message: string, public readonly status?: number, public readonly body?: unknown) {
    super(message);
    this.name = 'MinimaxError';
  }
}

interface MinimaxT2AResponse {
  base_resp?: { status_code?: number; status_msg?: string };
  data?: { audio?: string };
}

export async function synthesize(opts: MinimaxOptions, req: SynthRequest): Promise<Buffer> {
  const url = `${opts.apiBase.replace(/\/+$/, '')}/v1/t2a_v2?GroupId=${encodeURIComponent(opts.groupId)}`;
  const payload = {
    model: opts.model,
    text: req.text,
    stream: false,
    voice_setting: {
      voice_id: req.voiceId,
      speed: req.speed,
      vol: 1,
      pitch: 0,
    },
    audio_setting: {
      sample_rate: 32000,
      bitrate: 128000,
      format: 'mp3',
      channel: 1,
    },
  };

  const res = await request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  const bodyText = await res.body.text();

  if (res.statusCode < 200 || res.statusCode >= 300) {
    throw new MinimaxError(`MiniMax T2A HTTP ${res.statusCode}`, res.statusCode, bodyText.slice(0, 500));
  }

  let parsed: MinimaxT2AResponse;
  try {
    parsed = JSON.parse(bodyText) as MinimaxT2AResponse;
  } catch {
    throw new MinimaxError('MiniMax T2A returned non-JSON body', res.statusCode, bodyText.slice(0, 500));
  }

  const code = parsed.base_resp?.status_code;
  if (code !== 0 && code !== undefined) {
    throw new MinimaxError(
      `MiniMax T2A status ${code}: ${parsed.base_resp?.status_msg ?? 'unknown'}`,
      res.statusCode,
      parsed.base_resp,
    );
  }

  const hex = parsed.data?.audio;
  if (!hex || typeof hex !== 'string') {
    throw new MinimaxError('MiniMax T2A response missing data.audio', res.statusCode, parsed);
  }

  return Buffer.from(hex, 'hex');
}
