import type { GameCard as CardType, ResourceDeltas } from '../shared/types';

interface GameCardProps {
  card: CardType;
  onChoose: (deltas: ResourceDeltas) => void;
}

export function GameCard({ card, onChoose }: GameCardProps) {
  return (
    <div className="game-card">
      {card.image && (
        <img src={card.image} alt="" className="game-card-image" />
      )}
      <p className="game-card-text">{card.text}</p>
      <div className="game-card-actions">
        {card.format === 'yesno' ? (
          <>
            <button type="button" className="btn btn-no" onClick={() => onChoose(card.no)}>
              Нет
            </button>
            <button type="button" className="btn btn-yes" onClick={() => onChoose(card.yes)}>
              Да
            </button>
          </>
        ) : (
          card.options.map((option, index) => (
            <button
              key={index}
              type="button"
              className="btn btn-choice"
              onClick={() => onChoose(option.deltas)}
            >
              {option.label}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
