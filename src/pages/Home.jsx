import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

import useReveal from '../hooks/useReveal';
import StatCards from '../components/StatCards';

const galleryImages = [
  "/src/assets/1748504743791.jpg",
  "/src/assets/1748504767014.jpg",
  "/src/assets/1748528652485.jpg",
  "/src/assets/1748528708924.jpg",
  "/src/assets/1748529906173.jpg",
  "/src/assets/PHOTO-2023-01-31-05-08-32-3.webp",
]

const Home = () => {
        useReveal();

return (
        <div className="bg-fluid min-h-screen text-white">
            <header className="py-8">
                <div className="container hero">
                    <div style={{flex:'0 0 200px'}}>
                        <img src="/src/assets/usama.jpg" alt="Usama Sayed Aly" className="hero-photo" style={{width:180,height:180}} />
                    </div>

                    <div style={{flex:1}}>
                        <h1 className="text-3xl sm:text-4xl font-extrabold">Usama Sayed Abdelmobdy</h1>
                        <p className="text-sm mt-2 opacity-90 max-w-2xl">International water-sports lecturer, Program Director, coach and mentor with decades of experience building elite programs, coaching national teams and supporting athlete pathways.</p>

                        <div className="mt-6 flex gap-3 flex-wrap">
                            <a href="/src/assets/Usama Sayed Aly.pdf" target="_blank" rel="noreferrer" className="btn-theme">
                                <Icon icon="mdi:file-pdf" width="18" height="18" /> Download CV
                            </a>

                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=omobdy13@gmail.com&su=Hello&body=I%20wanted%20to%20reach%20out..."
                             target="_blank"
                             rel="noopener noreferrer"
                             className="btn-theme">
                             <Icon icon="ic:baseline-email" width="18" height="18" /> Contact
                             </a>

                            <a href="https://www.vertex-ac.com/" target="_blank" rel="noreferrer" className="btn-theme">
                                <Icon icon="akar-icons:link-chain" width="18" height="18" /> Visit Vertex AC
                            </a>

                            <a href="https://www.iwsfederation.com/usama-sayed-abdelmobdy/" target="_blank" rel="noreferrer" className="btn-theme">
                                <img src="/src/assets/iwsf_logo.jpg" alt="IWSF" style={{width:20,height:20,objectFit:'contain'}} /> IWSF Profile
                            </a>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold">Quick facts</h4>
                            <div className="mt-2 text-sm">
                                <div>- Program Director, International Water Sports Federation (IWSF)</div>
                                <div>- Founder & Owner — Vertex AC (Sports Academy)</div>
                                <div>- National Head Coach & International Lecturer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container py-8">
                <section className="grid md:grid-cols-2 gap-6">
                   <div className="card">
  <h2 className="text-xl font-semibold">Core Competencies</h2>
  <p className="mt-3 text-sm leading-relaxed">
    Water Sports Director &amp; International Lecturer | Elite Swimming Coach | 
    Expert in Leadership, Management &amp; Motivational Coaching | Driving Success 
    in the Fitness Industry | Team Development | Startups Sports Academies | 
    Public Speaking | Team Building | Event Planning
  </p>

  {/* Divider line */}
  <hr className="my-4 border-gray-600/40" />

  {/* Certifications Section */}
  <h3 className="text-lg font-medium mb-3">IWSF Card</h3>
  <div className="flex justify-center">
    <div className="p-2 bg-white rounded-xl shadow-xl">
      <img 
        src="/src/assets/WorkingCard-EU25_page-0001.jpg" 
        alt="IWSF Certification Card" 
        className="rounded-md" 
        style={{maxWidth: "320px", height: "auto"}} 
      />
    </div>
  </div>
</div>


                    <div className="card">
                        <h2 className="text-xl font-semibold">Profile</h2>
                        <p className="mt-2 text-sm">Dynamic coach and sports leader with over 30 years building teams, delivering coaching education, and leading high-performance programs across multiple disciplines. Experienced in athlete development, program design and leadership.</p>

                        <section className="mt-6">
                            <h3 className="font-semibold">Recent roles</h3>
                            <div className="mt-3">
                                <div className="mb-3">
                                    <h4 className="font-semibold">Vertex AC — Owner</h4>
                                    <div className="flex items-center gap-4 mt-2">
                                        <img src="/src/assets/color_logo.svg" alt="Vertex AC logo" style={{width:92,height:92,objectFit:'contain'}}/>
                                        <div>
                                            <p className="text-sm max-w-xl">Founder and owner of Vertex AC (sports academy) — designing athlete pathways and coaching programs across swimming and water sports. <a href="https://www.vertex-ac.com/" target="_blank" rel="noreferrer" className="underline">Visit website</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold">International Water Sports Federation (IWSF) — Program Director</h4>
                                    <div className="flex items-center gap-4 mt-2">
                                        <img src="/src/assets/iwsf_logo.jpg" alt="IWSF logo" className="iwsf-logo" />
                                        <div>
                                            <p className="text-sm max-w-xl">Program Director at the International Water Sports Federation. Responsible for program oversight, international collaboration and delivering coaching education. <a href="https://www.iwsfederation.com/usama-sayed-abdelmobdy/" target="_blank" rel="noreferrer" className="underline">View profile</a></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </section>

                <section className="mt-8 card">
                    <h2 className="text-xl font-semibold">Gallery</h2>
                    <p className="text-sm mt-2">A selection of photos from coaching, events and programs.</p>
                    <div className="gallery-grid">
                        {galleryImages.map((src, idx) => (
                            <img key={idx} src={src} alt={"Gallery "+(idx+1)} />
                        ))}
                    </div>
                </section>

                <section className="mt-6 card">
                    <h3 className="font-semibold">Other Roles</h3>
                    <p className="mt-2">Head Coach — Egypt National Team, Senior Coach at multiple clubs, international lecturer, and advisor for sports academies and federations.</p>
                </section>

              
<section className="mt-8 card">
    <h2 className="text-xl font-semibold mb-2">
        Hamdan Sports Complex Interview
    </h2>
    <p className="text-sm opacity-90 mb-4">
        Hosted at the Hamdan Sports Complex, this special interview highlights the 
        summer training camp for our international swimmers in preparation for the 
        inaugural Saudi Olympics.
    </p>

    <div className="flex justify-center">
        <video 
            controls 
            className="rounded-xl shadow-lg bg-black"
            style={{
                maxHeight: '80vh',
                width: 'auto',
                maxWidth: '100%',
                display: 'block'
            }}
            poster="/src/assets/Screenshot 2025-08-13 234844.png" // optional preview image
        >
            <source src="/src/assets/WhatsApp Video 2025-08-13 at 23.12.37_8446736d.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
</section>


            </main>
        </div>
    )
}
export default Home
