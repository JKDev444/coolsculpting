const planDetails = [
  {
    label: 'Starting point',
    title: 'Plans from $2,999',
    copy: 'Current starting price published by Omni. Your quote reflects the areas, applicators, and sessions in your personalized map.',
  },
  {
    label: 'Flexible timing',
    title: 'Financing options',
    copy: 'Current Omni programs may include 6–12 month 0% financing, subject to approval and program terms.',
  },
  {
    label: 'Added peace of mind',
    title: 'Omni Body Guarantee',
    copy: 'Eligibility and terms are reviewed with your specialist so you understand what applies before treatment begins.',
  },
];

export function PlanSection() {
  return (
    <section className="section planning" id="planning" aria-labelledby="planning-title">
      <div className="section-shell">
        <div className="planning-intro">
          <p className="eyebrow">From goals to a clear plan</p>
          <h2 id="planning-title">Your Body Map, Made Personal.</h2>
          <p>
            A thoughtful plan connects where you are now with what you hope to see—not just a number of cycles.
            Your complimentary consultation is where candidacy, cost, and timing come into focus.
          </p>
        </div>
        <div className="plan-grid">
          {planDetails.map((detail, index) => (
            <article className="plan-item" key={detail.title}>
              <span className="plan-number">0{index + 1}</span>
              <p className="eyebrow">{detail.label}</p>
              <h3>{detail.title}</h3>
              <p>{detail.copy}</p>
            </article>
          ))}
        </div>
        <a className="button button-dark" href="#assessment">
          Build my starting point <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
