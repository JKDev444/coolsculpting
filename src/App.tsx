import { ConsultationCta } from './components/ConsultationCta';
import { ExperienceSection } from './components/ExperienceSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlanSection } from './components/PlanSection';
import { ResultsSection } from './components/ResultsSection';
import { ReviewMarquee } from './components/ReviewMarquee';
import { ScienceSection } from './components/ScienceSection';
import './styles/page.css';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <ExperienceSection />
        <ReviewMarquee />
        <ResultsSection />
        <ScienceSection />
        <PlanSection />
        <FaqSection />
        <ConsultationCta />
      </main>
      <Footer />
    </>
  );
}
