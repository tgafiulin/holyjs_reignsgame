import type { GameCard as CardType } from '../shared/types';

interface GameCardProps {
  card: CardType;
  onYes: () => void;
  onNo: () => void;
}

export function GameCard({ card, onYes, onNo }: GameCardProps) {
  return (
    <div className="game-card">
      <p className="game-card-text">{card.text}</p>
      <div className="game-card-actions">
        <button type="button" className="btn btn-no" onClick={onNo}>
          Нет
        </button>
        <button type="button" className="btn btn-yes" onClick={onYes}>
          Да
        </button>
      </div>
    </div>
  );
}
