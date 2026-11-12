import leejamLogo from "../assets/leejam_sports_company_logo.jpg"
import blackViralLogo from "../assets/blackviral-logo.png"
import iwsfLogo from "../assets/iwsf_logo_transparent.png"
import egyptTeamLogo from "../assets/33321.jpg"
import event1 from "../assets/1748529777879.jpg"
import event2 from "../assets/1692464874660.jpg"
import event3 from "../assets/1748529906173.jpg"
import event4 from "../assets/1748530041114.jpg"
import event5 from "../assets/1748529822634.jpg"

const roles = [
  {
    company: "Leejam Sports Company · Fitness Time",
    logo: leejamLogo,
    title: "Senior Swimming Specialist · Head of Swimming Programmes",
    dates: "Riyadh, Saudi Arabia · July 2019–August 2025",
    points: [
      "Directed swimming operations across 187+ aquatic facilities and led a 370+ person coaching, instruction, and lifeguard workforce.",
      "Grew annual programme revenue from SAR 350,000 to SAR 21 million and established 57 BLU Swimming Academy locations.",
      "Partnered with the Saudi Ministry of Education on swimming literacy across 54 schools, reaching more than 1,000 students.",
      "Helped certify 3,000+ aquatic professionals and introduced common operating, safety, and quality standards.",
      "Developed 1,700+ international coach certifications across more than 200 accredited courses, including a network of 30 Master Trainers.",
      "Designed progressive personal-training curricula and achievement certificates, and launched learn-to-swim initiatives and BLU Academy projects in Jubail and Jeddah."
    ]
  },
  {
    company: "Black Viral Academy",
    logo: blackViralLogo,
    title: "Founder and Owner",
    dates: "2025–Present",
    points: [
      "Building a multi-sport academy with programmes in swimming, gymnastics, football, basketball, boxing, and kickboxing.",
      "Set a progression model that moves participants from water safety and foundational skills toward confident participation and competition.",
      "Established governance, operating processes, and coaching standards; built an internationally certified team around a safety-first culture.",
      "Lead curriculum, coach education, quality assurance, school and municipal partnerships, and academy operations, with initiatives supporting female participation and leadership.",
      "Published annual targets include 2,000 children supported to become water-safe, 75 safety personnel trained, and 400 swimmers progressing into competitive squads."
    ]
  },
  {
    company: "International Water Sports Federation",
    logo: iwsfLogo,
    logoTransparent: true,
    title: "Program Director · Head Trainer and Courses Director",
    dates: "2020–Present",
    profileUrl: "https://www.iwsfederation.com/usama-sayed-abdelmobdy/",
    points: [
      "Oversee programme delivery, international collaboration, and coach education across aquatic disciplines.",
      "Designed course curricula, assessment systems, and quality frameworks to support consistent training and certification across countries.",
      "Delivered 200+ certification courses and trained more than 3,000 aquatics professionals in swimming, baby swimming, aqua fitness, lifeguarding, CPR, and first aid.",
      "Delivered CPR and first-aid programmes with internationally recognised NAEMT (USA) certification."
    ]
  },
  {
    company: "Egyptian National Swimming Team",
    logo: egyptTeamLogo,
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
                <p className="eyebrow">{role.company}</p>
                <div className="career-title-row">
                  {role.logo && <img src={role.logo} alt="" className={`career-logo${role.logoTransparent ? " career-logo-transparent" : ""}`} loading="lazy" />}
                  <h2>{role.title}</h2>
                </div>
                <p className="muted">{role.dates}</p>
                <ul className="career-points">{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
                {role.company === "Black Viral Academy" && (
                  <a className="text-link" href="https://www.blackviral.club/" target="_blank" rel="noreferrer">Black Viral Academy <span aria-hidden="true">↗</span></a>
                )}
                {role.profileUrl && (
                  <a className="text-link role-profile-link" href={role.profileUrl} target="_blank" rel="noreferrer">IWSF profile <span aria-hidden="true">↗</span></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-intro"><p className="eyebrow">Earlier coaching roles</p><h2>Work across Egyptian clubs and national teams</h2></div>
        <div className="surface earlier-roles">
          <p><strong>Head Coach</strong> · 6th of October Club, 2011–2015</p>
          <p><strong>Head Coach</strong> · Zamalek Sporting Club, 2009–2011</p>
          <p><strong>Head Coach</strong> · Heliopolis Sporting Club, 2007–2009</p>
          <p><strong>General Trainer</strong> · Heliopolis and 6th of October Clubs, 2002–2009</p>
          <p><strong>General Trainer</strong> · Cairo Sports Club, 1995–2002; Police Club, 1993–2000</p>
          <p><strong>Open Water Coach</strong> · Cairo National Team, 1993–1995</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-intro"><p className="eyebrow">Programmes & events</p><h2>Work in the water, across the region</h2></div>
        <div className="gallery-grid event-gallery">
          {[event1, event2, event3, event4, event5].map((photo, index) => (
            <figure key={photo}><img src={photo} alt={`Swimming programme event photograph ${index + 1}`} loading="lazy" /><figcaption>Programme and event archive</figcaption></figure>
          ))}
        </div>
      </section>
    </main>
  </div>
)
export default Experience
