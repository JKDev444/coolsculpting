import { useEffect, useRef, useState } from 'react';
import { captureAttribution } from '../../lib/attribution';
import { createLocalLeadAdapter, type LeadSubmissionAdapter } from '../../services/lead-adapter';
import { buildLeadSubmission, toggleBodyArea, validateContact } from './assessment-model';
import { goals, situations, timings } from './assessment-data';
import { AreaStep } from './AreaStep';
import { ChoiceStep } from './ChoiceStep';
import { ContactStep } from './ContactStep';
import { ResultStep } from './ResultStep';
import type { AssessmentAnswers, ContactDetails, ContactErrors } from './types';
import './assessment.css';

const initialAnswers: AssessmentAnswers = {
  areas: [],
  goal: '',
  situation: '',
  timing: '',
};

const initialContact: ContactDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  consent: false,
};

interface AssessmentProps {
  adapter?: LeadSubmissionAdapter;
}

function getBrowserStorage() {
  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}

export function Assessment({ adapter = createLocalLeadAdapter() }: AssessmentProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<AssessmentAnswers>(initialAnswers);
  const [contact, setContact] = useState<ContactDetails>(initialContact);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [areaMessage, setAreaMessage] = useState('');
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'complete'>('idle');
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const attribution = useRef(
    captureAttribution({
      search: window.location.search,
      landingUrl: window.location.href,
      capturedAt: new Date().toISOString(),
      storage: getBrowserStorage(),
    }),
  );

  useEffect(() => {
    if (step > 1 && submissionState !== 'complete') stepHeadingRef.current?.focus();
  }, [step, submissionState]);

  const toggleArea = (area: Parameters<typeof toggleBodyArea>[1]) => {
    const result = toggleBodyArea(answers.areas, area);
    setAnswers((current) => ({ ...current, areas: result.selected }));
    setAreaMessage(result.limitReached ? 'Choose up to three areas. Remove one before adding another.' : '');
  };

  const canContinue =
    (step === 1 && answers.areas.length > 0) ||
    (step === 2 && Boolean(answers.goal)) ||
    (step === 3 && Boolean(answers.situation)) ||
    (step === 4 && Boolean(answers.timing));

  const goForward = () => {
    if (canContinue) setStep((current) => Math.min(current + 1, 5));
  };

  const goBack = () => {
    if (submissionState === 'complete') {
      setSubmissionState('idle');
      return;
    }
    setStep((current) => Math.max(current - 1, 1));
  };

  const updateContact = (field: keyof ContactDetails, value: string | boolean) => {
    setContact((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(contact);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstError = Object.keys(nextErrors)[0] as keyof ContactDetails;
      const refs = {
        firstName: firstNameRef,
        lastName: lastNameRef,
        email: emailRef,
        phone: phoneRef,
        consent: consentRef,
      };
      refs[firstError].current?.focus();
      return;
    }

    setSubmissionState('submitting');
    const result = await adapter.submit(
      buildLeadSubmission({
        answers,
        contact,
        attribution: attribution.current,
        submittedAt: new Date().toISOString(),
      }),
    );
    setSubmissionState(result.accepted ? 'complete' : 'idle');
  };

  const question = () => {
    if (step === 1) {
      return <AreaStep selected={answers.areas} limitMessage={areaMessage} onToggle={toggleArea} />;
    }
    if (step === 2) {
      return (
        <ChoiceStep
          name="goal"
          question="What would you most like this to do for you?"
          hint="Choose the outcome that matters most."
          options={goals}
          value={answers.goal}
          onChange={(goal) => setAnswers((current) => ({ ...current, goal }))}
        />
      );
    }
    if (step === 3) {
      return (
        <ChoiceStep
          name="situation"
          question="Where are you in your body-contouring journey?"
          hint="This helps our team offer honest next-step guidance."
          options={situations}
          value={answers.situation}
          onChange={(situation) => setAnswers((current) => ({ ...current, situation }))}
        />
      );
    }
    if (step === 4) {
      return (
        <ChoiceStep
          name="timing"
          question="When would you like to get started?"
          hint="No commitment—this only helps shape your consultation."
          options={timings}
          value={answers.timing}
          onChange={(timing) => setAnswers((current) => ({ ...current, timing }))}
        />
      );
    }
    return (
      <ContactStep
        contact={contact}
        errors={errors}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        phoneRef={phoneRef}
        consentRef={consentRef}
        onChange={updateContact}
      />
    );
  };

  return (
    <section className="assessment" id="assessment" aria-labelledby="assessment-title">
      <div className="assessment-topline">
        <span>Quick assessment</span>
        <span>{submissionState === 'complete' ? 'Complete' : `${step} / 5`}</span>
      </div>
      <div className="assessment-progress" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((item) => (
          <span data-active={item <= step || submissionState === 'complete'} key={item} />
        ))}
      </div>
      <h2 id="assessment-title">Let’s See If You May Qualify for CoolSculpting®</h2>
      <p className="assessment-intro">
        Answer a few quick questions about your goals and stubborn areas. It takes about 60 seconds.
      </p>

      {submissionState === 'complete' ? (
        <ResultStep answers={answers} contact={contact} onBack={goBack} />
      ) : (
        <form noValidate onSubmit={submit}>
          <h3 className="sr-only" ref={stepHeadingRef} tabIndex={-1}>
            Assessment step {step} of 5
          </h3>
          {question()}
          <div className="assessment-controls">
            <button
              className="assessment-back"
              type="button"
              onClick={goBack}
              disabled={step === 1 || submissionState === 'submitting'}
            >
              <span aria-hidden="true">←</span> Back
            </button>
            {step < 5 ? (
              <button
                className="assessment-primary"
                type="button"
                disabled={!canContinue}
                onClick={goForward}
              >
                Continue <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button
                className="assessment-primary"
                type="submit"
                disabled={submissionState === 'submitting'}
              >
                {submissionState === 'submitting' ? 'Preparing guidance…' : 'See my guidance'}
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </form>
      )}
      <p className="assessment-privacy">
        <span aria-hidden="true">◇</span> Your information stays in this local preview and is not sent to a live CRM.
      </p>
    </section>
  );
}
