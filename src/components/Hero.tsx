import { Assessment } from '../features/assessment/Assessment';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-media"
        src="/assets/images/hero-body.jpg"
        alt=""
        width="1858"
        height="612"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">CoolSculpting Elite® at Omni</p>
          <h1 id="hero-title">
            <span>Same You.</span>
            <span>A More</span>
            <span>Confident You.</span>
          </h1>
          <p className="hero-deck">
            Reduce stubborn fat. No surgery. No downtime. Real results.
          </p>
          <ul className="hero-trust" aria-label="Why patients choose Omni">
            <li><span aria-hidden="true">✓</span> 8 years of experience</li>
            <li><span aria-hidden="true">✓</span> CoolSculpting Elite®</li>
            <li><span aria-hidden="true">✓</span> Complimentary consultation</li>
          </ul>
        </div>
        <Assessment />
      </div>
    </section>
  );
}
