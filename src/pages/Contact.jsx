import { Icon } from "@iconify/react"

const Contact = () => (
  <div className="bg-fluid site-content">
    <main className="container page-content contact-page">
      <header className="page-intro">
        <p className="eyebrow">Contact</p><h1>Let’s talk about swimming and sport</h1>
        <p className="page-lede">For coaching education, programme development, and partnership enquiries, get in touch.</p>
      </header>
      <section className="contact-layout">
        <div className="surface contact-details">
          <a href="mailto:omobdy13@gmail.com"><Icon icon="mdi:email-outline" width="22" height="22" /><span><small>Email</small>omobdy13@gmail.com</span></a>
          <a href="tel:+966583817518"><Icon icon="mdi:phone-outline" width="22" height="22" /><span><small>Phone · Riyadh</small>+966 58 381 7518</span></a>
          <a href="https://www.linkedin.com/in/usama-sayed/" target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" width="22" height="22" /><span><small>LinkedIn</small>Usama Sayed Abdelmobdy</span></a>
          <a href="https://www.blackviral.club/" target="_blank" rel="noreferrer"><Icon icon="mdi:open-in-new" width="22" height="22" /><span><small>Academy</small>Black Viral · blackviral.club</span></a>
        </div>
        <aside className="contact-note">
          <p className="eyebrow">Based in Riyadh</p><h2>Working across the region</h2>
          <p>Available for international coaching, aquatic programme development, coach education, and sports operations.</p>
          <a className="btn-theme" href="mailto:omobdy13@gmail.com">Send an email</a>
        </aside>
      </section>

      <section className="content-section map-section" aria-labelledby="map-heading">
        <div className="section-intro"><p className="eyebrow">Where I work</p><h2 id="map-heading">Riyadh and the UAE</h2>
          <p className="section-lede">Explore the locations in the interactive maps.</p></div>
        <div className="map-grid">
          <article className="surface"><h3>Riyadh, Saudi Arabia</h3>
            <iframe title="Interactive map of Riyadh, Saudi Arabia" src="https://www.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </article>
          <article className="surface"><h3>Black Viral Academy · Al Twar, Dubai</h3>
            <iframe title="Interactive map of Black Viral Academy in Al Twar, Dubai" src="https://www.google.com/maps?q=Black%20Viral%20Academy%2C%20Al%20Twar%2C%20Dubai&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </article>
        </div>
      </section>
    </main>
  </div>
)
export default Contact
