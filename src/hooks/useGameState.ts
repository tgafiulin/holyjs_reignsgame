import { useState, useCallback } from 'react';
import type { GameState, GameScreen, GameOverReason, ResourceDeltas } from '../shared/types';
import { INITIAL_STATE, MAX_RESOURCE, MIN_RESOURCE } from '../shared/constants';
import { CARDS } from '../data/cards';

function clamp(value: number): number {
  return Math.max(MIN_RESOURCE, Math.min(MAX_RESOURCE, value));
}

function applyDeltas(
  state: GameState,
  deltas: ResourceDeltas
): Pick<GameState, 'money' | 'health' | 'expertise' | 'chill'> {
  return {
    money: clamp(state.money + deltas.money),
    health: clamp(state.health + deltas.health),
    expertise: clamp(state.expertise + deltas.expertise),
    chill: clamp(state.chill + deltas.chill),
  };
}

function checkGameOver(
  resources: Pick<GameState, 'money' | 'health' | 'expertise' | 'chill'>
): GameOverReason | null {
  if (resources.money <= MIN_RESOURCE) return 'money';
  if (resources.health <= MIN_RESOURCE) return 'health';
  if (resources.expertise <= MIN_RESOURCE) return 'expertise';
  if (resources.chill <= MIN_RESOURCE) return 'chill';
  return null;
}

function getNextCardIndex(history: number[]): number {
  const used = new Set(history);
  const available = CARDS.map((_, i) => i).filter((i) => !used.has(i));
  if (available.length === 0) return Math.floor(Math.random() * CARDS.length);
  return available[Math.floor(Math.random() * available.length)];
}

export function useGameState() {
  const [screen, setScreen] = useState<GameScreen>('menu');
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [gameOverReason, setGameOverReason] = useState<GameOverReason | null>(null);

  const startGame = useCallback(() => {
    const firstIndex = Math.floor(Math.random() * CARDS.length);
    setState({
      ...INITIAL_STATE,
      currentCardIndex: firstIndex,
    });
    setGameOverReason(null);
    setScreen('game');
  }, []);

  const choose = useCallback(
    (deltas: ResourceDeltas) => {
      const newResources = applyDeltas(state, deltas);
      const daysLeft = state.daysLeft - 1;
      const history = [...state.history, state.currentCardIndex];

      const over = checkGameOver(newResources);
      if (over !== null) {
        setState((prev) => ({
          ...prev,
          ...newResources,
          daysLeft,
          history,
        }));
        setGameOverReason(over);
        setScreen('gameover');
        return;
      }

      if (daysLeft <= 0) {
        setState((prev) => ({
          ...prev,
          ...newResources,
          daysLeft: 0,
          history,
        }));
        setScreen('win');
        return;
      }

      const nextIndex = getNextCardIndex(history);
      setState((prev) => ({
        ...prev,
        ...newResources,
        daysLeft,
        history,
        currentCardIndex: nextIndex,
      }));
    },
    [state]
  );

  const currentCard = CARDS[state.currentCardIndex] ?? null;

  return {
    screen,
    state,
    gameOverReason,
    currentCard,
    startGame,
    choose,
  };
}
