// TEMPORARY diagnostic endpoint. DELETE before non-debugging release.
// Returns shape-only signals about MiniMax env vars so we can tell whether
// the value stored on Vercel is the correct one — without leaking the secret.
import type { VercelRequest, VercelResponse } from '@vercel/node';

function inspect(value: string | undefined) {
  if (value === undefined) return { present: false };
  return {
    present: true,
    length: value.length,
    prefix: value.slice(0, 8),
    suffix: value.slice(-3),
    leadingWhitespace: /^\s/.test(value),
    trailingWhitespace: /\s$/.test(value),
    containsNewline: value.includes('\n'),
    looksLikeJwt: /^eyJ[A-Za-z0-9_-]+\./.test(value),
  };
}

export default function handler(_req: VercelRequest, res: VercelResponse): void {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    note: 'temporary diagnostic; remove after use',
    nodeVersion: process.version,
    apiBase: process.env.MINIMAX_API_BASE || 'https://api.minimax.chat',
    model: process.env.MINIMAX_MODEL || 'speech-02-hd',
    apiKey: inspect(process.env.MINIMAX_API_KEY),
    groupId: inspect(process.env.MINIMAX_GROUP_ID),
  });
}
