import type { VercelRequest, VercelResponse } from '@vercel/node';
import { isConfigured } from './_minimax.js';

export default function handler(_req: VercelRequest, res: VercelResponse): void {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    ok: true,
    minimax: isConfigured(),
    model: process.env.MINIMAX_MODEL || 'speech-02-hd',
  });
}
