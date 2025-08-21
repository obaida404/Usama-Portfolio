import useReveal from '../hooks/useReveal';
import StatCards from '../components/StatCards';
import { Icon } from '@iconify/react';

const Contact = () => {
    useReveal();

    return (
        <div className="bg-fluid site-content min-h-screen text-white">
            <main className="container py-12 space-y-8">

                {/* Stats Section */}
                <StatCards />

                {/* Contact Header */}
                <h1 className="text-2xl font-bold">Contact</h1>

                {/* Contact Info Card */}
                <div className="mt-6 card p-6 space-y-5">

                    <div className="flex items-center gap-3">
                        <Icon icon="mdi:map-marker" width="22" height="22" className="text-red-400" />
                        <span>Riyadh, Saudi Arabia</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Icon icon="mdi:phone" width="22" height="22" className="text-green-400" />
                        <a href="tel:+966583817518" className="hover:underline">
                            +966 58 381 7518
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Icon icon="mdi:email" width="22" height="22" className="text-yellow-400" />
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=omobdy13@gmail.com&su=Hello&body=I%20wanted%20to%20reach%20out..."
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            omobdy13@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Icon icon="mdi:linkedin" width="22" height="22" className="text-blue-400" />
                        <a
                            href="https://www.linkedin.com/in/usama-sayed-90a384289"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            usama-sayed-abdelmobdy
                        </a>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=omobdy13@gmail.com&su=Hello&body=I%20wanted%20to%20reach%20out..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-theme flex items-center gap-2"
                    >
                        <Icon icon="ic:baseline-email" width="18" height="18" />
                        Send me an Email
                    </a>
                </div>

                {/* Riyadh Map */}
                <div className="card p-4">
                    <iframe
                        title="Riyadh Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.30805466769!2d46.6752953!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02e6c7b6a7b5%3A0xb0e57b0b4b6b0d79!2sRiyadh!5e0!3m2!1sen!2ssa!4v1684152214699!5m2!1sen!2ssa"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Dubai Map */}
                <div className="card p-4 mt-6">
                    <iframe
                        title="Dubai Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.30733683116!2d55.383490099999996!3d25.2602448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d7119890bdd%3A0xac2d22bc422b45ad!2sVertex%20Athletic%20SC%20Al%20Twar!5e0!3m2!1sen!2ssa!4v1755097596931!5m2!1sen!2ssa"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </main>
        </div>
    );
};

export default Contact;
