import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';

export interface CacheKeyInput {
  text: string;
  voice: string;
  speed: number;
  model: string;
}

export function cacheKey(input: CacheKeyInput): string {
  const normalized = JSON.stringify({
    text: input.text.normalize('NFC'),
    voice: input.voice,
    speed: Number(input.speed.toFixed(2)),
    model: input.model,
  });
  return createHash('sha256').update(normalized).digest('hex');
}

export class AudioCache {
  constructor(private readonly dir: string) {}

  async init(): Promise<void> {
    await fs.mkdir(this.dir, { recursive: true });
  }

  filePath(key: string): string {
    return path.join(this.dir, `${key}.mp3`);
  }

  async get(key: string): Promise<Buffer | null> {
    try {
      return await fs.readFile(this.filePath(key));
    } catch (err: unknown) {
      if (isNodeNotFound(err)) return null;
      throw err;
    }
  }

  async put(key: string, data: Buffer): Promise<void> {
    const target = this.filePath(key);
    const tmp = `${target}.${process.pid}.tmp`;
    await fs.writeFile(tmp, data);
    await fs.rename(tmp, target);
  }
}

function isNodeNotFound(err: unknown): boolean {
  return Boolean(
    err && typeof err === 'object' && 'code' in err && (err as { code?: string }).code === 'ENOENT',
  );
}
