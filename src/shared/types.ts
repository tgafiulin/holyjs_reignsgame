export type ResourceKey = "money" | "health" | "mood" | "burnout";

export interface ResourceDeltas {
  money: number;
  health: number;
  mood: number;
  burnout: number;
}

export interface GameCard {
  id: string;
  text: string;
  image?: string;
  yes: ResourceDeltas;
  no: ResourceDeltas;
}

export interface GameState {
  daysLeft: number;
  money: number;
  health: number;
  mood: number;
  burnout: number;
  currentCardIndex: number;
  history: number[];
}

export type GameScreen = "menu" | "game" | "gameover" | "win";

export type GameOverReason = "money" | "health" | "mood" | "burnout";
