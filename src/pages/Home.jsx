import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import StatCards from "../components/StatCards"
import usamaPortrait from "../assets/usama-profile.jpg"
import beachPhoto from "../assets/usama-beach.jpg"
import finaPhoto from "../assets/usama-fina.jpg"
import blackViralLogo from "../assets/blackviral-logo.png"
import iwsfLogoTransparent from "../assets/iwsf_logo_transparent.png"
import resumePdf from "../assets/Usama_Resume.pdf"
import iwsfCardPdf from "../assets/IWSF-credentials.pdf"
import iwsfCardImage from "../assets/iwsf-card.png"
import interviewPoster from "../assets/Screenshot 2025-08-13 234844.png"
import interviewVideo from "../assets/WhatsApp Video 2025-08-13 at 23.12.37_8446736d.mp4"
import archive1 from "../assets/1748504743791.jpg"
import archive2 from "../assets/1748504767014.jpg"
import archive3 from "../assets/1748528652485.jpg"
import archive4 from "../assets/1748528708924.jpg"
import archive5 from "../assets/1748529906173.jpg"
import archive6 from "../assets/PHOTO-2023-01-31-05-08-32-3.webp"

const galleryImages = [
  { src: usamaPortrait, alt: "Usama Sayed Abdelmobdy, portrait" },
  { src: beachPhoto, alt: "Usama at the beach" },
  { src: finaPhoto, alt: "Usama in a FINA shirt" },
  { src: archive1, alt: "Swimming coaching portfolio photograph" },
  { src: archive2, alt: "Aquatics programme portfolio photograph" },
  { src: archive3, alt: "Swimming event portfolio photograph" },
  { src: archive4, alt: "Coach education portfolio photograph" },
  { src: archive5, alt: "Aquatics event portfolio photograph" },
  { src: archive6, alt: "Swimming programme portfolio photograph" }
]

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
          <div className="academy-card-heading">
            <div><p className="eyebrow">Current work</p><h2>Building the next generation at Black Viral Academy</h2></div>
            <div className="academy-brand-stack">
              <a className="academy-brand-link" href="https://www.blackviral.club/" target="_blank" rel="noreferrer" aria-label="Visit Black Viral Academy">
                <img src={blackViralLogo} alt="Black Viral Academy logo" className="academy-logo" loading="lazy" />
              </a>
              <a className="academy-brand-link iwsf-brand-link" href="https://www.iwsfederation.com/usama-sayed-abdelmobdy/" target="_blank" rel="noreferrer" aria-label="IWSF profile: Program Director">
                <img src={iwsfLogoTransparent} alt="" className="academy-iwsf-logo" loading="lazy" />
                <span>IWSF · Program Director</span>
              </a>
            </div>
          </div>
          <p>
            Black Viral Academy brings together swimming, water safety, and multi-sport training.
            Its programmes are designed to take young athletes from foundational skills into
            confident participation and competition.
          </p>
          <div className="academy-facts" aria-label="Black Viral Academy published figures">
            <div><strong>1,000+</strong><span>athletes trained</span></div>
            <div><strong>50+</strong><span>certified programmes</span></div>
            <div><strong>150+</strong><span>pools managed</span></div>
          </div>
          <p className="muted">Figures published by Black Viral Academy.</p>
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
          {galleryImages.map((image, index) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} loading={index < 3 ? "lazy" : "lazy"} />
              <figcaption>{index < 3 ? ["Portrait", "At the water", "Swimming"][index] : "From the coaching archive"}</figcaption>
            </figure>
          ))}
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
