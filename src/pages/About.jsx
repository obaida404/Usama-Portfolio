import useReveal from '../hooks/useReveal';
import StatCards from '../components/StatCards';
// Import gallery images
import gallery1 from '../assets/PHOTO-2022-01-20-19-01-16-1.webp';
import gallery2 from '../assets/1748528581581.jpg';
import gallery3 from '../assets/PHOTO-2022-01-20-19-01-16.webp';
import gallery4 from '../assets/1748529684165.jpg';

const About = () => {
    useReveal();

    return (
        <div className="bg-fluid site-content min-h-screen text-white">
            <main className="container py-12">
            
                <StatCards />
                <h1 className="text-2xl font-bold">About</h1>
                <p className="mt-4 max-w-3xl">Dynamic and accomplished water sports director and elite swimming coach with over 30 years of experience, including six years leading swimming departments at Leejam (Fitness Time), one of the Middle East's top sports companies. A former international swimmer and two-time African champion, recognized for developing over 1,500 high-performance swimmers and leading strategic programs across Egypt and Saudi Arabia. Proven expertise in athlete development, coaching education, program design, and facility management aligned with national sports initiatives.</p>

                <h2 className="mt-8 text-xl font-semibold">Core Competencies</h2>
                <ul className="mt-3 space-y-1">
                    <li>International lecturer</li>
                    <li>Programs & Curriculum Design</li>
                    <li>Sports Facility Management</li>
                    <li>Elite Athlete Development</li>
                    <li>Event Planning & Public Speaking</li>
                </ul>
            
                <section className="mt-6 card reveal">
                    <h3 className="font-semibold">Gallery</h3>
                    <div className="gallery-grid mt-3">
                        <img src={gallery1} alt="Gallery 1" />
                        <img src={gallery2} alt="Gallery 2" />
                        <img src={gallery3} alt="Gallery 3" />
                        <img src={gallery4} alt="Gallery 4" />
                    </div>
                </section>
    
            </main>
        </div>
    )
}
export default About;