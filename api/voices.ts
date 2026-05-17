import type { VercelRequest, VercelResponse } from '@vercel/node';
import { VOICES, DEFAULT_VOICE_ID } from './_voices.js';

export default function handler(_req: VercelRequest, res: VercelResponse): void {
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  res.status(200).json({ default: DEFAULT_VOICE_ID, voices: VOICES });
}
