import { useGameState } from './hooks/useGameState';
import { Menu } from './pages/Menu';
import { Game } from './pages/Game';
import { GameOver } from './pages/GameOver';
import { Win } from './pages/Win';
import './App.css';

function App() {
  const { screen, state, gameOverReason, currentCard, startGame, choose } = useGameState();

  if (screen === 'menu') {
    return <Menu onStart={startGame} />;
  }
  if (screen === 'game') {
    return (
      <Game
        daysLeft={state.daysLeft}
        money={state.money}
        health={state.health}
        expertise={state.expertise}
        chill={state.chill}
        currentCard={currentCard}
        onChoose={choose}
      />
    );
  }
  if (screen === 'gameover') {
    return <GameOver reason={gameOverReason} onRestart={startGame} />;
  }
  if (screen === 'win') {
    return <Win onRestart={startGame} />;
  }

  return null;
}

export default App;
