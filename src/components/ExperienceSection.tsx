export function ExperienceSection() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="section-shell experience-grid">
        <figure className="experience-media reveal-frame">
          <img
            src="/assets/images/real-treatment.jpg"
            alt="A patient receiving a CoolSculpting treatment with the applicator in place"
            width="515"
            height="526"
            loading="lazy"
          />
          <figcaption>
            <strong>8 years</strong>
            <span>of CoolSculpting experience</span>
          </figcaption>
        </figure>
        <div className="experience-copy">
          <p className="eyebrow">8 Years of CoolSculpting Experience</p>
          <h2 id="experience-title">More Than a Treatment. A Better You.</h2>
          <p className="lead">
            For eight years, Omni has helped South Sound patients explore CoolSculpting with informed,
            individualized care.
          </p>
          <p>
            Your plan begins with a conversation—not a package. We listen to what bothers you, assess the
            areas you would like to change, and build a treatment map around your anatomy and goals.
          </p>
          <a className="button button-dark" href="#planning">
            Why choose Omni <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
