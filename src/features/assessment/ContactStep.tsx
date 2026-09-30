import type { ChangeEvent, RefObject } from 'react';
import type { ContactDetails, ContactErrors } from './types';

interface ContactStepProps {
  contact: ContactDetails;
  errors: ContactErrors;
  firstNameRef: RefObject<HTMLInputElement | null>;
  lastNameRef: RefObject<HTMLInputElement | null>;
  emailRef: RefObject<HTMLInputElement | null>;
  phoneRef: RefObject<HTMLInputElement | null>;
  consentRef: RefObject<HTMLInputElement | null>;
  onChange: (field: keyof ContactDetails, value: string | boolean) => void;
}

export function ContactStep({
  contact,
  errors,
  firstNameRef,
  lastNameRef,
  emailRef,
  phoneRef,
  consentRef,
  onChange,
}: ContactStepProps) {
  const textChange =
    (field: Exclude<keyof ContactDetails, 'consent'>) =>
    (event: ChangeEvent<HTMLInputElement>) =>
      onChange(field, event.target.value);

  const field = (
    id: Exclude<keyof ContactDetails, 'consent'>,
    label: string,
    type: 'text' | 'email' | 'tel',
    autoComplete: string,
    ref: RefObject<HTMLInputElement | null>,
  ) => (
    <div className="contact-field">
      <label htmlFor={`assessment-${id}`}>{label}</label>
      <input
        ref={ref}
        id={`assessment-${id}`}
        name={id}
        type={type}
        value={contact[id]}
        autoComplete={autoComplete}
        inputMode={type === 'tel' ? 'tel' : undefined}
        spellCheck={type === 'email' ? false : undefined}
        aria-invalid={errors[id] ? 'true' : 'false'}
        aria-describedby={errors[id] ? `assessment-${id}-error` : undefined}
        onChange={textChange(id)}
      />
      {errors[id] ? (
        <small id={`assessment-${id}-error`} className="field-error">
          {errors[id]}
        </small>
      ) : null}
    </div>
  );

  return (
    <fieldset className="assessment-fieldset contact-step">
      <legend>Where should we send your personalized guidance?</legend>
      <p className="assessment-hint">
        Your consultation—not this form—confirms whether treatment is appropriate for you.
      </p>
      <div className="contact-grid">
        {field('firstName', 'First name', 'text', 'given-name', firstNameRef)}
        {field('lastName', 'Last name', 'text', 'family-name', lastNameRef)}
        {field('email', 'Email', 'email', 'email', emailRef)}
        {field('phone', 'Phone', 'tel', 'tel', phoneRef)}
      </div>
      <label className="consent-field" htmlFor="assessment-consent">
        <input
          ref={consentRef}
          id="assessment-consent"
          name="consent"
          type="checkbox"
          checked={contact.consent}
          aria-invalid={errors.consent ? 'true' : 'false'}
          aria-describedby={errors.consent ? 'assessment-consent-error' : undefined}
          onChange={(event) => onChange('consent', event.target.checked)}
        />
        <span>Omni Centers may contact me about this assessment and a complimentary consultation.</span>
      </label>
      {errors.consent ? (
        <small id="assessment-consent-error" className="field-error consent-error">
          {errors.consent}
        </small>
      ) : null}
    </fieldset>
  );
}
