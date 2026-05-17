export const VOICES = [
  { id: 'Japanese_KindLady', label: '日本語 · やさしい女性', gender: 'female', jaFriendly: true },
  { id: 'Japanese_IntellectualSenior', label: '日本語 · 知的なシニア男性', gender: 'male', jaFriendly: true },
  { id: 'Japanese_DecentYoungMan', label: '日本語 · 礼儀正しい青年', gender: 'male', jaFriendly: true },
  { id: 'Japanese_SweetHerbivore', label: '日本語 · 草食系女性', gender: 'female', jaFriendly: true },
  { id: 'female-shaonv', label: '少女 (汎用)', gender: 'female', jaFriendly: false },
  { id: 'male-qn-qingse', label: '青瑟 (汎用)', gender: 'male', jaFriendly: false },
] as const;

export const DEFAULT_VOICE_ID = 'Japanese_KindLady';
