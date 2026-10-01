import { reviewRows, type ReviewItem } from '../data/reviews';

function ReviewCard({ item }: { item: ReviewItem }) {
  const placeholder = item.contentStatus === 'placeholder';
  return (
    <article className="review-card" data-placeholder={placeholder} aria-label={`${item.source}: ${item.author}`}>
      <div className="review-source">
        <span className="review-mark" data-placeholder={placeholder} aria-hidden="true">
          {placeholder ? '—' : 'O'}
        </span>
        <span className="review-origin">{placeholder ? 'Content pending' : item.source}</span>
      </div>
      <blockquote>“{item.quote}”</blockquote>
      <footer>
          <strong>— {item.author}</strong>
          <span>{placeholder ? 'Awaiting approval' : item.source}</span>
      </footer>
    </article>
  );
}

export function ReviewMarquee() {
  return (
    <section className="section reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="section-shell reviews-heading">
        <div>
          <p className="eyebrow">Real People. Real Experiences.</p>
          <h2 id="reviews-title">What Our Patients Are Saying</h2>
          <p>Published first-party stories from Omni patients. Unapproved review slots remain clearly identified.</p>
        </div>
        <div className="reviews-badge" aria-label="Review content status">
          <span className="review-mark" aria-hidden="true">O</span>
          <strong>Patient stories</strong>
          <span>Published content only</span>
        </div>
      </div>
      <div className="review-rails" aria-label="Patient testimonial library">
        {reviewRows.map((row, rowIndex) => {
          const repeated = [...row, ...row];
          return (
            <div className="review-viewport" key={rowIndex} tabIndex={0} aria-label={`Testimonial row ${rowIndex + 1}`}>
              <div className="review-track" data-direction={rowIndex % 2 === 0 ? 'left' : 'right'}>
                {repeated.map((item, itemIndex) => (
                  <ReviewCard item={item} key={`${rowIndex}-${item.id}-${itemIndex}`} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
