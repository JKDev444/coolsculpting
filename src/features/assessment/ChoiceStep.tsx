import type { ChoiceOption } from './assessment-data';

interface ChoiceStepProps<T extends string> {
  name: string;
  question: string;
  hint: string;
  options: ChoiceOption<T>[];
  value: T | '';
  onChange: (value: T) => void;
}

export function ChoiceStep<T extends string>({
  name,
  question,
  hint,
  options,
  value,
  onChange,
}: ChoiceStepProps<T>) {
  return (
    <fieldset className="assessment-fieldset">
      <legend>{question}</legend>
      <p className="assessment-hint">{hint}</p>
      <div className="choice-list">
        {options.map((option) => (
          <label className="choice-card" data-selected={value === option.id} key={option.id}>
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />
            <span className="choice-marker" aria-hidden="true" />
            <span>
              <strong>{option.label}</strong>
              <small>{option.description}</small>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
