import { bodyAreas } from './assessment-data';
import type { BodyAreaId } from './types';

interface AreaStepProps {
  selected: BodyAreaId[];
  limitMessage: string;
  onToggle: (area: BodyAreaId) => void;
}

export function AreaStep({ selected, limitMessage, onToggle }: AreaStepProps) {
  return (
    <fieldset className="assessment-fieldset">
      <legend>Where does stubborn fat bother you most?</legend>
      <p className="assessment-hint">Select up to 3 areas.</p>
      <div className="area-grid">
        {bodyAreas.map((area) => {
          const isSelected = selected.includes(area.id);
          return (
            <button
              className="area-card"
              data-selected={isSelected}
              type="button"
              aria-pressed={isSelected}
              aria-label={`${area.label}, ${isSelected ? 'selected' : 'not selected'}`}
              key={area.id}
              onClick={() => onToggle(area.id)}
            >
              <span className="area-media" aria-hidden="true">
                {area.image ? (
                  <img
                    src={area.image}
                    alt=""
                    width={area.width}
                    height={area.height}
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <span className="area-placeholder" />
                )}
                <span className={`treatment-zone ${area.zoneClass}`} />
                <span className="area-check">✓</span>
              </span>
              <span className="area-label">{area.label}</span>
            </button>
          );
        })}
      </div>
      <p className="area-status" role="status" aria-live="polite">
        {limitMessage || `${selected.length} of 3 areas selected`}
      </p>
    </fieldset>
  );
}
