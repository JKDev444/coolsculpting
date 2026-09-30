const scienceSteps = [
  {
    number: '1',
    title: 'Target',
    copy: 'Your specialist maps the stubborn, pinchable fat that aligns with the treatment applicator.',
    image: '/assets/images/pinchable-fat.jpg',
    alt: 'Pinchable abdominal treatment area',
  },
  {
    number: '2',
    title: 'Cool',
    copy: 'Controlled cooling is delivered to the planned area while surrounding tissue is considered.',
    image: '/assets/images/science-cooling-cells.jpg',
    alt: 'Illustration of fat cells affected by controlled cooling',
  },
  {
    number: '3',
    title: 'Clear',
    copy: 'Over time, the body naturally processes the treated fat cells. Individual results and timing vary.',
    image: '/assets/images/body-contour.jpg',
    alt: 'Body contour illustration showing common treatment areas',
  },
];

export function ScienceSection() {
  return (
    <section className="section science" id="science" aria-labelledby="science-title">
      <div className="section-shell science-layout">
        <div className="science-intro">
          <p className="eyebrow">The Science Behind Real Results</p>
          <h2 id="science-title">Target. Cool. Clear.</h2>
          <p className="lead">
            CoolSculpting uses controlled cooling to target and eliminate stubborn fat cells—without surgery or downtime.
          </p>
          <a className="button button-dark" href="#faq">Learn how it works <span aria-hidden="true">→</span></a>
        </div>
        <ol className="science-steps">
          {scienceSteps.map((step) => (
            <li key={step.number}>
              <div className="science-step-media">
                <img src={step.image} alt={step.alt} width="320" height="320" loading="lazy" decoding="async" />
                <span>{step.number}</span>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
