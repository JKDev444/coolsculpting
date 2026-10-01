export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="wordmark" href="#top" aria-label="Omni Aesthetics &amp; Wellness">
          <span>OMNI</span>
          <small>Aesthetics &amp; Wellness</small>
        </a>
        <nav aria-label="Footer navigation">
          <a href="#experience">CoolSculpting</a>
          <a href="#results">Results</a>
          <a href="#planning">Pricing</a>
          <a href="#faq">FAQs</a>
          <a href="#consultation">Contact</a>
        </nav>
        <a className="footer-phone" href="tel:+13603523065">(360) 352-3065</a>
      </div>
      <div className="footer-safety">
        <p>
          CoolSculpting® is intended for visible fat reduction in appropriate candidates and is not a weight-loss treatment.
          Individual results may vary. The online assessment provides general guidance only; consultation is required to
          determine candidacy. Ask your provider for current Important Safety Information.
        </p>
        <p>© {new Date().getFullYear()} Omni Centers · Local prototype · Privacy · Accessibility</p>
      </div>
    </footer>
  );
}
