import path from 'node:path';
import Fastify, { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import staticPlugin from '@fastify/static';
import { z } from 'zod';
import { type Config, isMinimaxConfigured } from './config.js';
import { AudioCache, cacheKey } from './cache.js';
import { synthesize, MinimaxError, type SynthRequest } from './minimax.js';
import { VOICES, DEFAULT_VOICE_ID } from './voices.js';

type Synthesizer = (req: SynthRequest) => Promise<Buffer>;

export interface BuildOptions {
  config: Config;
  synthesize?: Synthesizer;
  cache?: AudioCache;
}

const ttsQuery = z.object({
  text: z.string().min(1).max(2000),
  voice: z.string().min(1).max(64).default(DEFAULT_VOICE_ID),
  speed: z.coerce.number().min(0.5).max(2).default(1.0),
});

export async function buildApp(opts: BuildOptions): Promise<FastifyInstance> {
  const { config } = opts;
  const cache = opts.cache ?? new AudioCache(path.resolve(config.CACHE_DIR));
  await cache.init();

  const synth: Synthesizer =
    opts.synthesize ??
    ((req: SynthRequest) =>
      synthesize(
        {
          apiKey: config.MINIMAX_API_KEY ?? '',
          groupId: config.MINIMAX_GROUP_ID ?? '',
          apiBase: config.MINIMAX_API_BASE,
          model: config.MINIMAX_MODEL,
        },
        req,
      ));

  const app = Fastify({ logger: { level: process.env.LOG_LEVEL ?? 'info' } });

  await app.register(cors, { origin: config.CORS_ORIGIN });

  if (config.STATIC_DIR) {
    await app.register(staticPlugin, {
      root: path.resolve(config.STATIC_DIR),
      prefix: '/',
      index: ['index.html'],
    });
  }

  app.get('/api/health', async () => ({
    ok: true,
    minimax: isMinimaxConfigured(config),
    model: config.MINIMAX_MODEL,
  }));

  app.get('/api/voices', async () => ({
    default: DEFAULT_VOICE_ID,
    voices: VOICES,
  }));

  app.get('/api/tts', async (req, reply) => {
    const parsed = ttsQuery.safeParse(req.query);
    if (!parsed.success) {
      return reply.code(400).send({ error: 'invalid query', issues: parsed.error.issues });
    }
    const { text, voice, speed } = parsed.data;

    if (!isMinimaxConfigured(config)) {
      return reply.code(503).send({ error: 'minimax_not_configured' });
    }

    const key = cacheKey({ text, voice, speed, model: config.MINIMAX_MODEL });

    const cached = await cache.get(key);
    if (cached) {
      reply.header('X-Cache', 'HIT');
      reply.header('Cache-Control', 'public, max-age=31536000, immutable');
      reply.type('audio/mpeg');
      return reply.send(cached);
    }

    try {
      const audio = await synth({ text, voiceId: voice, speed });
      await cache.put(key, audio);
      reply.header('X-Cache', 'MISS');
      reply.header('Cache-Control', 'public, max-age=31536000, immutable');
      reply.type('audio/mpeg');
      return reply.send(audio);
    } catch (err: unknown) {
      if (err instanceof MinimaxError) {
        req.log.error({ err: err.message, status: err.status, body: err.body }, 'minimax failure');
        return reply.code(502).send({ error: 'minimax_failure', detail: err.message });
      }
      req.log.error({ err }, 'tts failure');
      return reply.code(500).send({ error: 'tts_failure' });
    }
  });

  return app;
}
