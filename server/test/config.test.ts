import { describe, it, expect } from 'vitest';
import { loadConfig, isMinimaxConfigured } from '../src/config.js';

describe('loadConfig', () => {
  it('applies defaults when env is empty', () => {
    const cfg = loadConfig({});
    expect(cfg.PORT).toBe(8787);
    expect(cfg.HOST).toBe('127.0.0.1');
    expect(cfg.MINIMAX_API_BASE).toBe('https://api.minimax.chat');
    expect(isMinimaxConfigured(cfg)).toBe(false);
  });

  it('marks minimax configured when both key and group set', () => {
    const cfg = loadConfig({ MINIMAX_API_KEY: 'k', MINIMAX_GROUP_ID: 'g' });
    expect(isMinimaxConfigured(cfg)).toBe(true);
  });

  it('rejects non-numeric PORT', () => {
    expect(() => loadConfig({ PORT: 'not-a-port' })).toThrow();
  });

  it('rejects invalid API base URL', () => {
    expect(() => loadConfig({ MINIMAX_API_BASE: 'not-a-url' })).toThrow();
  });
});
