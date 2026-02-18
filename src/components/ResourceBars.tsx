import type { ResourceKey } from '../shared/types';
import { RESOURCE_LABELS } from '../shared/constants';
import { MAX_RESOURCE } from '../shared/constants';

interface ResourceBarsProps {
  money: number;
  health: number;
  expertise: number;
  chill: number;
}

const KEYS: ResourceKey[] = ['money', 'health', 'expertise', 'chill'];

export function ResourceBars({ money, health, expertise, chill }: ResourceBarsProps) {
  const values = { money, health, expertise, chill };

  return (
    <div className="resource-bars">
      {KEYS.map((key) => {
        const value = values[key];
        const pct = (value / MAX_RESOURCE) * 100;
        const color = value <= 0 ? 'var(--danger)' : `var(--${key})`;
        return (
          <div key={key} className="resource-row">
            <span className="resource-label">{RESOURCE_LABELS[key]}</span>
            <div className="resource-track">
              <div
                className="resource-fill"
                style={{
                  width: `${pct}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
