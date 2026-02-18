export type ResourceKey = "money" | "health" | "mood" | "burnout";

export interface ResourceDeltas {
  money: number;
  health: number;
  mood: number;
  burnout: number;
}

/** Вариант ответа для карточки формата choice */
export interface CardOption {
  label: string;
  deltas: ResourceDeltas;
}

/** Карточка с ответами Да/Нет */
export interface YesNoGameCard {
  id: string;
  format: 'yesno';
  text: string;
  image?: string;
  yes: ResourceDeltas;
  no: ResourceDeltas;
}

/** Карточка с кастомными вариантами ответа */
export interface ChoiceGameCard {
  id: string;
  format: 'choice';
  text: string;
  image?: string;
  options: CardOption[];
}

export type GameCard = YesNoGameCard | ChoiceGameCard;

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
