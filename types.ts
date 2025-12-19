
export interface PhonicsItem {
  t: string;      // Word or sound text (supports basic HTML-like patterns)
  g: string;      // Guide/Phonetic representation
  r: string;      // Reward emoji
  ex: string;     // Example words
  audio: string;  // Speech text
}

export interface GameData {
  [key: string]: PhonicsItem[];
}

export type ScreenState = 'MENU' | 'GAME';

export interface LevelMetadata {
  id: string;
  name: string;
  category: string;
  color?: string;
}
