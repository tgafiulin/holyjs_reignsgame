import type { GameOverReason } from '../shared/types';

const REASON_TEXTS: Record<GameOverReason, string> = {
  money: 'Закончились деньги — поездка сорвалась.',
  health: 'Здоровье подвело — до конференции не добрался.',
  expertise: 'Экспертиза на нуле — пришлось отменить поездку.',
  chill: 'Чилл опустился — ты выгорел.',
};

interface GameOverProps {
  reason: GameOverReason | null;
  onRestart: () => void;
}

export function GameOver({ reason, onRestart }: GameOverProps) {
  const text = reason ? REASON_TEXTS[reason] : 'Игра окончена.';

  return (
    <div className="screen screen-gameover">
      <h2 className="screen-title">Не доехал</h2>
      <p className="screen-text">{text}</p>
      <button type="button" className="btn btn-primary" onClick={onRestart}>
        Попробовать снова
      </button>
    </div>
  );
}
