import { areaLabel, goalLabel, situationLabel, timingLabel } from './assessment-data';
import type { AssessmentAnswers, ContactDetails } from './types';

interface ResultStepProps {
  answers: AssessmentAnswers;
  contact: ContactDetails;
  onBack: () => void;
}

export function ResultStep({ answers, contact, onBack }: ResultStepProps) {
  return (
    <div className="assessment-result" aria-live="polite">
      <span className="result-kicker">Personalized guidance</span>
      <h3>{contact.firstName}, you may be a candidate.</h3>
      <p>
        Your answers suggest a CoolSculpting consultation may be worth exploring. A complimentary
        in-person consultation confirms candidacy, reviews contraindications, and maps an appropriate
        treatment plan.
      </p>
      <div className="result-map" aria-label="Your selected treatment areas">
        <span>Your body map</span>
        <ul>
          {answers.areas.map((area) => (
            <li key={area}>{areaLabel(area)}</li>
          ))}
        </ul>
      </div>
      <dl className="result-summary">
        <div>
          <dt>Primary goal</dt>
          <dd>{goalLabel(answers.goal)}</dd>
        </div>
        <div>
          <dt>Current situation</dt>
          <dd>{situationLabel(answers.situation)}</dd>
        </div>
        <div>
          <dt>Preferred timing</dt>
          <dd>{timingLabel(answers.timing)}</dd>
        </div>
      </dl>
      <a className="assessment-primary result-action" href="tel:+13603523065">
        Call Omni to plan my consultation
        <span aria-hidden="true">→</span>
      </a>
      <button className="assessment-back result-back" type="button" onClick={onBack}>
        Back to contact details
      </button>
    </div>
  );
}
