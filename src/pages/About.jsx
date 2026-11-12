const achievements = [
  ["SAR 350K → 21M", "Annual swimming programme revenue at Leejam", "Grew annual revenue through programme development and operational leadership."],
  ["57", "BLU Swimming Academy locations established", "Expanded access to structured swimming instruction across the network."],
  ["54 schools", "Swimming literacy programme", "Reached 1,000+ students with the Saudi Ministry of Education."],
  ["3,000+", "Aquatics professionals certified", "Supported coach, instructor, and safety professional development."],
  ["1,500+", "Competitive swimmers developed", "Built athlete pathways from club programmes to national-level competition."],
  ["2× African · 4× Arab", "Championship titles as an elite swimmer", "Also competed at 34 international championships and set 70+ national and international records."]
]

const About = () => (
  <div className="bg-fluid site-content">
    <main className="container page-content">
      <header className="page-intro">
        <p className="eyebrow">About</p>
        <h1>More than three decades in aquatics</h1>
        <p className="page-lede">
          My work has moved between the pool deck, coach education, and sports operations. I have
          coached at club and national level, led large swimming programmes, and helped build
          systems that make participation safer and more accessible.
        </p>
      </header>

      <section className="content-section biography-grid">
        <article className="surface">
          <p className="eyebrow">The work</p>
          <h2>From athlete to coach, educator, and programme leader</h2>
          <p>
            I began as a competitive swimmer and went on to coach the Egyptian national swimming
            team. Since then, I have worked across Egypt, Saudi Arabia, and the UAE in athlete
            development, swimming operations, and international coach education.
          </p>
          <p>
            At Leejam Sports Company, I led swimming operations across more than 187 aquatic
            facilities. My focus was practical: develop capable teams, set consistent safety and
            quality standards, and give more people a clear path into swimming.
          </p>
          <p>
            Today, I lead Black Viral Academy and continue my work with the International Water
            Sports Federation, supporting training and certification across aquatic disciplines.
          </p>
        </article>
        <aside className="surface education-note">
          <p className="eyebrow">Education</p>
          <h2>Sport, performance, and people</h2>
          <p>Master's in Sports Psychology for Elite Swimmers</p>
          <p className="muted">Abubakar Tafawa Balewa University · 2022</p>
          <hr />
          <p>Bachelor of Physical Education</p>
          <p className="muted">Helwan University · 1997</p>
          <p className="muted">PhD research candidate in elite swimming performance, Helwan University.</p>
        </aside>
      </section>

      <section className="content-section" aria-labelledby="achievements-heading">
        <div className="section-intro">
          <p className="eyebrow">Selected results</p><h2 id="achievements-heading">Achievements</h2>
          <p className="section-lede">Outcomes from coaching, programme leadership, and competition.</p>
        </div>
        <div className="achievement-grid">
          {achievements.map(([value, label, detail]) => (
            <article className="achievement-item" key={label}>
              <p className="achievement-value">{value}</p><h3>{label}</h3><p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section academy-panel">
        <div>
          <p className="eyebrow">Founder · Black Viral Academy</p><h2>Make sport a lifelong skill</h2>
          <p>
            Black Viral Academy is built around safe, structured progression: water competency and
            foundational movement first, then skills, confidence, and competitive pathways. Its
            multi-sport programmes include swimming, gymnastics, football, basketball, boxing,
            and kickboxing.
          </p>
          <a className="text-link" href="https://www.blackviral.club/" target="_blank" rel="noreferrer">
            Learn about Black Viral <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="academy-targets">
          <p className="eyebrow">Published academy targets</p>
          <p>2,000 children supported to become water-safe each year</p>
          <p>75 safety personnel trained annually</p>
          <p>400 swimmers progressing into competitive squads</p>
          <p>10 accessible, family-friendly locations</p>
          <small>These are the academy's stated goals, not completed results.</small>
        </div>
      </section>

      <section className="content-section">
        <div className="section-intro"><p className="eyebrow">Professional focus</p><h2>What I bring to a programme</h2></div>
        <ul className="inline-list competency-list">
          <li>Swimming programme design</li><li>Coach education and mentoring</li>
          <li>High-performance athlete development</li><li>Sports facility operations</li>
          <li>Water safety and lifeguard development</li><li>Quality assurance and team leadership</li>
        </ul>
      </section>

    </main>
  </div>
)
export default About
