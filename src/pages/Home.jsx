import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import StatCards from "../components/StatCards"
import usamaPortrait from "../assets/usama-profile.jpg"
import beachPhoto from "../assets/usama-beach.jpg"
import finaPhoto from "../assets/usama-fina.jpg"
import resumePdf from "../assets/Usama_Resume.pdf"
import iwsfCardPdf from "../assets/IWSF-credentials.pdf"
import iwsfCardImage from "../assets/iwsf-card.png"
import interviewPoster from "../assets/Screenshot 2025-08-13 234844.png"
import interviewVideo from "../assets/WhatsApp Video 2025-08-13 at 23.12.37_8446736d.mp4"

const Home = () => (
  <div className="home-page">
    <header className="home-hero bg-fluid">
      <div className="container hero">
        <div className="portrait-wrap">
          <img src={usamaPortrait} alt="Usama Sayed Abdelmobdy" className="hero-photo" fetchPriority="high" />
          <p className="portrait-caption">Aquatics · Coaching · Leadership</p>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">A career built around the water</p>
          <h1>Usama Sayed Abdelmobdy</h1>
          <p className="hero-lede">
            Aquatics and sports facilities leader, international lecturer, and former Egyptian
            national team coach. I build programmes, develop coaches, and help athletes progress
            from their first swim to high-performance competition.
          </p>
          <div className="hero-actions">
            <a className="btn-theme" href={resumePdf} download="Usama_Resume.pdf">
              <Icon icon="mdi:file-download-outline" width="19" height="19" /> Download résumé
            </a>
            <Link className="btn-outline" to="/contact">Get in touch</Link>
          </div>
          <p className="hero-location">Based in Riyadh, Saudi Arabia · Working internationally</p>
        </div>
      </div>
    </header>

    <main className="container home-content">
      <section className="content-section" aria-labelledby="career-highlights">
        <div className="section-intro">
          <p className="eyebrow">Career at a glance</p>
          <h2 id="career-highlights">Experience measured in people and programmes.</h2>
        </div>
        <StatCards />
      </section>

      <section className="content-section home-grid" aria-label="Current work and credentials">
        <article className="surface">
          <p className="eyebrow">Current work</p>
          <h2>Building the next generation at Black Viral Academy</h2>
          <p>
            Black Viral Academy brings together swimming, water safety, and multi-sport training.
            Its programmes are designed to take young athletes from foundational skills into
            confident participation and competition.
          </p>
          <ul className="inline-list" aria-label="Black Viral Academy programmes">
            <li>Swimming</li><li>Gymnastics</li><li>Football</li><li>Basketball</li>
            <li>Boxing</li><li>Kickboxing</li>
          </ul>
          <a className="text-link" href="https://www.blackviral.club/" target="_blank" rel="noreferrer">
            Visit Black Viral Academy <span aria-hidden="true">↗</span>
          </a>
        </article>

        <article className="surface credential-card">
          <div>
            <p className="eyebrow">Professional credential</p>
            <h2>International Water Sports Federation</h2>
            <p>Trainer and Master Trainer credentials issued by the IWSF.</p>
            <a className="text-link" href={iwsfCardPdf} target="_blank" rel="noreferrer">
              Open credential card <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a className="credential-preview" href={iwsfCardPdf} target="_blank" rel="noreferrer" aria-label="Open IWSF credential card PDF">
            <img src={iwsfCardImage} alt="IWSF credential card for Usama Sayed Abdelmobdy" loading="lazy" />
          </a>
        </article>
      </section>

      <section className="content-section" aria-labelledby="gallery-heading">
        <div className="section-heading-row">
          <div><p className="eyebrow">On deck and beyond</p><h2 id="gallery-heading">A few moments from the work</h2></div>
          <Link className="text-link" to="/experience">Explore experience <span aria-hidden="true">→</span></Link>
        </div>
        <div className="gallery-grid">
          <figure><img src={usamaPortrait} alt="Usama Sayed Abdelmobdy in a portrait" loading="lazy" /><figcaption>Coach education and sports leadership</figcaption></figure>
          <figure><img src={beachPhoto} alt="Usama at the beach in swim gear" loading="lazy" /><figcaption>Time in the water</figcaption></figure>
          <figure><img src={finaPhoto} alt="Usama wearing a FINA shirt" loading="lazy" /><figcaption>Swimming, from grassroots to elite sport</figcaption></figure>
        </div>
      </section>

      <section className="content-section interview-section">
        <div>
          <p className="eyebrow">In conversation</p><h2>At Hamdan Sports Complex</h2>
          <p>An interview from an international swimming camp, sharing the work behind athlete preparation and coach development.</p>
        </div>
        <video controls preload="none" poster={interviewPoster} aria-label="Interview at Hamdan Sports Complex">
          <source src={interviewVideo} type="video/mp4" />Your browser does not support the video tag.
        </video>
      </section>
    </main>
  </div>
)
export default Home
