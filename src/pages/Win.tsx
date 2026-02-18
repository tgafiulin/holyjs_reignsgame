interface WinProps {
  onRestart: () => void;
}

export function Win({ onRestart }: WinProps) {
  return (
    <div className="screen screen-win">
      <h2 className="screen-title">Ты на конференции!</h2>
      <p className="screen-text">
        Удалось добраться в целости и сохранить баланс. Хорошего митапа.
      </p>
      <button type="button" className="btn btn-primary" onClick={onRestart}>
        Сыграть ещё
      </button>
    </div>
  );
}
