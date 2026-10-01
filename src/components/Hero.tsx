import { Assessment } from '../features/assessment/Assessment';

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-media"
        src="/assets/images/body-contour.jpg"
        alt=""
        width="320"
        height="320"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-photo-panel" aria-hidden="true" />
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
          <ul className="hero-proof" aria-label="CoolSculpting highlights">
            <li><span aria-hidden="true">✓</span> FDA-cleared</li>
            <li><span aria-hidden="true">✓</span> No surgery</li>
            <li><span aria-hidden="true">✓</span> Real patient results</li>
          </ul>
        </div>
        <Assessment />
      </div>
    </section>
  );
}
