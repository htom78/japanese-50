import { z } from 'zod';

const schema = z.object({
  PORT: z.coerce.number().int().min(1).max(65535).default(8787),
  HOST: z.string().default('127.0.0.1'),
  MINIMAX_API_KEY: z.string().min(1).optional(),
  MINIMAX_GROUP_ID: z.string().min(1).optional(),
  MINIMAX_API_BASE: z.string().url().default('https://api.minimax.chat'),
  MINIMAX_MODEL: z.string().default('speech-02-hd'),
  CACHE_DIR: z.string().default('.cache'),
  CACHE_MAX_BYTES: z.coerce.number().int().min(0).default(500 * 1024 * 1024),
  STATIC_DIR: z.string().optional(),
  CORS_ORIGIN: z.string().default('*'),
});

export type Config = z.infer<typeof schema>;

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  return schema.parse(env);
}

export function isMinimaxConfigured(cfg: Config): boolean {
  return Boolean(cfg.MINIMAX_API_KEY && cfg.MINIMAX_GROUP_ID);
}
