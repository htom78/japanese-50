export const VOICES = [
  // Default — cloned voice (user-curated intellectual female).
  { id: 'moss_audio_66200a8a-04fd-11f1-bea2-224d1feaaf61', label: '默认 · 知性女声 (克隆)', gender: 'female', jaFriendly: true },
  // Verified MiniMax built-in voices.
  { id: 'Japanese_KindLady', label: '日本語 · やさしい女性', gender: 'female', jaFriendly: true },
  { id: 'Japanese_IntellectualSenior', label: '日本語 · 知的なシニア男性', gender: 'male', jaFriendly: true },
  { id: 'female-yujie', label: '御姐 (通用)', gender: 'female', jaFriendly: false },
  { id: 'female-chengshu', label: '成熟女声 (通用)', gender: 'female', jaFriendly: false },
  { id: 'audiobook_female_1', label: '朗读女声 1', gender: 'female', jaFriendly: false },
  { id: 'audiobook_female_2', label: '朗读女声 2', gender: 'female', jaFriendly: false },
  { id: 'presenter_female', label: '主持女声', gender: 'female', jaFriendly: false },
  { id: 'female-tianmei', label: '甜美女声', gender: 'female', jaFriendly: false },
  { id: 'female-shaonv', label: '少女', gender: 'female', jaFriendly: false },
  { id: 'lovely_girl', label: 'Lovely Girl', gender: 'female', jaFriendly: false },
  { id: 'male-qn-qingse', label: '青瑟男声', gender: 'male', jaFriendly: false },
] as const;

export const DEFAULT_VOICE_ID = 'moss_audio_66200a8a-04fd-11f1-bea2-224d1feaaf61';
