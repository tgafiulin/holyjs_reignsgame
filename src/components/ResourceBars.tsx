import type { ResourceKey } from '../shared/types';
import { RESOURCE_LABELS } from '../shared/constants';
import { MAX_RESOURCE } from '../shared/constants';

interface ResourceBarsProps {
  money: number;
  health: number;
  mood: number;
  burnout: number;
}

const KEYS: ResourceKey[] = ['money', 'health', 'mood', 'burnout'];

export function ResourceBars({ money, health, mood, burnout }: ResourceBarsProps) {
  const values = { money, health, mood, burnout };
  // chill = MAX - burnout: high chill = good, low chill = bad (выгорел)
  const displayValues = { ...values, burnout: MAX_RESOURCE - burnout };

  return (
    <div className="resource-bars">
      {KEYS.map((key) => {
        const value = displayValues[key];
        const pct = (value / MAX_RESOURCE) * 100;
        const color =
          key === 'burnout'
            ? value <= 0
              ? 'var(--danger)'
              : 'var(--chill)'
            : value <= 0
              ? 'var(--danger)'
              : `var(--${key})`;
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
