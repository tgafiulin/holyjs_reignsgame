import type { GameState } from './types';

export const MAX_RESOURCE = 5;
export const MIN_RESOURCE = 0;
export const INITIAL_DAYS = 7;

export const INITIAL_STATE: GameState = {
  daysLeft: INITIAL_DAYS,
  money: 3,
  health: 3,
  mood: 3,
  burnout: 2,
  currentCardIndex: 0,
  history: [],
};

export const RESOURCE_LABELS: Record<
  import('./types').ResourceKey,
  string
> = {
  money: 'Деньги',
  health: 'Здоровье',
  mood: 'Настроение',
  burnout: 'Выгорание',
};
