const roles = [
  {
    company: "Leejam Sports Company · Fitness Time",
    title: "Senior Swimming Specialist · Head of Swimming Programmes",
    dates: "Riyadh, Saudi Arabia · July 2019–August 2025",
    points: [
      "Directed swimming operations across 187+ aquatic facilities and led a 370+ person coaching, instruction, and lifeguard workforce.",
      "Grew annual programme revenue from SAR 350,000 to SAR 21 million and established 57 BLU Swimming Academy locations.",
      "Partnered with the Saudi Ministry of Education on swimming literacy across 54 schools, reaching more than 1,000 students.",
      "Helped certify 3,000+ aquatic professionals and introduced common operating, safety, and quality standards."
    ]
  },
  {
    company: "Black Viral Academy",
    title: "Founder and Owner",
    dates: "2025–Present",
    points: [
      "Building a multi-sport academy with programmes in swimming, gymnastics, football, basketball, boxing, and kickboxing.",
      "Set a progression model that moves participants from water safety and foundational skills toward confident participation and competition.",
      "Published annual targets include 2,000 children supported to become water-safe, 75 safety personnel trained, and 400 swimmers progressing into competitive squads."
    ]
  },
  {
    company: "International Water Sports Federation",
    title: "Head Trainer and Courses Director",
    dates: "2020–Present",
    points: [
      "Delivered 200+ certification courses and trained more than 3,000 aquatics professionals.",
      "Developed training systems used across multiple countries and taught swimming, baby swimming, aqua fitness, lifeguarding, CPR, and first aid.",
      "Delivered CPR and first-aid programmes with internationally recognised NAEMT (USA) certification."
    ]
  },
  {
    company: "Egyptian National Swimming Team",
    title: "Head Coach",
    dates: "2015–2019",
    points: [
      "Prepared elite swimmers for national and international championships and designed annual training and competition plans.",
      "Developed high-performance athlete pathways and supported coach and talent development."
    ]
  },
  {
    company: "International Company for Sports Facilities Management",
    title: "Founder and Chief Executive Officer",
    dates: "Egypt · 2012–2019",
    points: [
      "Founded and grew a sports-facilities management company operating six branches and serving approximately 2,500 athletes.",
      "Led operations, staffing, budgets, and the long-term growth plan."
    ]
  }
]

const Experience = () => (
  <div className="bg-fluid site-content">
    <main className="container page-content">
      <header className="page-intro">
        <p className="eyebrow">Experience</p><h1>Building teams, programmes, and athlete pathways</h1>
        <p className="page-lede">A career across coaching, international education, and the work of running swimming and sports programmes.</p>
      </header>
      <section className="content-section">
        <div className="career-list">
          {roles.map((role) => (
            <article className="career-item" key={role.company}>
              <div className="career-marker" aria-hidden="true" />
              <div className="career-body">
                <p className="eyebrow">{role.company}</p><h2>{role.title}</h2><p className="muted">{role.dates}</p>
                <ul className="career-points">{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
                {role.company === "Black Viral Academy" && (
                  <a className="text-link" href="https://www.blackviral.club/" target="_blank" rel="noreferrer">Black Viral Academy <span aria-hidden="true">↗</span></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  </div>
)
export default Experience
