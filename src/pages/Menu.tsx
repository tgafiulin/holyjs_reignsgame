interface MenuProps {
  onStart: () => void;
}

export function Menu({ onStart }: MenuProps) {
  return (
    <div className="screen screen-menu">
      <h1 className="title">До конференции</h1>
      <p className="subtitle">
        Осталось 7 дней. Держи в балансе деньги, здоровье, настроение и чилл — и доберись до конференции.
      </p>
      <button type="button" className="btn btn-primary" onClick={onStart}>
        В путь
      </button>
    </div>
  );
}
