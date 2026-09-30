import { faqItems } from '../data/faqs';

export function FaqSection() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="section-shell faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">Clear answers, no pressure</p>
          <h2 id="faq-title">Questions Before Your Consultation</h2>
          <p>
            Every body and treatment plan is different. These answers are a starting point; your consultation is
            where Omni confirms what is appropriate for you.
          </p>
          <a className="text-link" href="tel:+13603523065">Call (360) 352-3065 <span aria-hidden="true">→</span></a>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-mark" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
