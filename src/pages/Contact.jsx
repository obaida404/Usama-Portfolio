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
          <a href="https://www.linkedin.com/in/usama-sayed-90a384289" target="_blank" rel="noreferrer"><Icon icon="mdi:linkedin" width="22" height="22" /><span><small>LinkedIn</small>Usama Sayed Abdelmobdy</span></a>
          <a href="https://www.blackviral.club/" target="_blank" rel="noreferrer"><Icon icon="mdi:open-in-new" width="22" height="22" /><span><small>Academy</small>Black Viral · blackviral.club</span></a>
        </div>
        <aside className="contact-note">
          <p className="eyebrow">Based in Riyadh</p><h2>Working across the region</h2>
          <p>Available for international coaching, aquatic programme development, coach education, and sports operations.</p>
          <a className="btn-theme" href="mailto:omobdy13@gmail.com">Send an email</a>
        </aside>
      </section>
    </main>
  </div>
)
export default Contact
