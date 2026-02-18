import { ResourceBars } from '../components/ResourceBars';
import { GameCard } from '../components/GameCard';

interface GameProps {
  daysLeft: number;
  money: number;
  health: number;
  mood: number;
  burnout: number;
  currentCard: import('../shared/types').GameCard | null;
  onChoose: (deltas: import('../shared/types').ResourceDeltas) => void;
}

export function Game({
  daysLeft,
  money,
  health,
  mood,
  burnout,
  currentCard,
  onChoose,
}: GameProps) {
  return (
    <div className="screen screen-game">
      <header className="game-header">
        <span className="days-badge">Дней до конференции: {daysLeft}</span>
      </header>
      <ResourceBars money={money} health={health} mood={mood} burnout={burnout} />
      <main className="game-main">
        {currentCard ? (
          <GameCard card={currentCard} onChoose={onChoose} />
        ) : (
          <p>Загрузка...</p>
        )}
      </main>
    </div>
  );
}
