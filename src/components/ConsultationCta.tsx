export function ConsultationCta() {
  return (
    <section className="consultation" id="consultation" aria-labelledby="consultation-title">
      <div className="consultation-image" aria-hidden="true" />
      <div className="consultation-copy">
        <p className="eyebrow">Ready to learn more?</p>
        <h2 id="consultation-title">Schedule Your Complimentary Consultation</h2>
        <p>
          Our team will assess your goals, create a personalized treatment plan, and answer all of your questions.
        </p>
        <a className="button button-light" href="#assessment">
          Book my consultation <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
