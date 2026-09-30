import { useState } from 'react';

const links = [
  ['Experience', '#experience'],
  ['Reviews', '#reviews'],
  ['Results', '#results'],
  ['How it works', '#science'],
  ['Planning', '#planning'],
  ['FAQs', '#faq'],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Omni Aesthetics &amp; Wellness">
        <span>OMNI</span>
        <small>Aesthetics &amp; Wellness</small>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="menu-line" />
        <span className="menu-line" />
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="primary-navigation" className="primary-nav" data-open={open} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#assessment">
        Start assessment <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}
