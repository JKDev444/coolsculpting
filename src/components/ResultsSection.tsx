import { resultItems } from '../data/results';

export function ResultsSection() {
  return (
    <section className="section results" id="results" aria-labelledby="results-title">
      <div className="section-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Real Results</p>
            <h2 id="results-title">Visible Results. Lasting Confidence.</h2>
          </div>
          <a className="text-link" href="#assessment">View more results <span aria-hidden="true">→</span></a>
        </div>
        <div className="result-grid">
          {resultItems.map((item, index) => (
            <figure className="result-card" key={item.id}>
              <div className="result-image-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <strong>Published comparison {String(index + 1).padStart(2, '0')}</strong>
                <span>Omni patient gallery</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="disclaimer">Published treatment comparisons. Source credits appear within each image. Individual results may vary.</p>
      </div>
    </section>
  );
}
