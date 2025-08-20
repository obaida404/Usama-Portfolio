import useReveal from '../hooks/useReveal';
import StatCards from '../components/StatCards';
import { Icon } from '@iconify/react';

const Education = () => {
    useReveal();

    return (
        <div className="bg-fluid site-content min-h-screen text-white">
            <main className="container py-12">
                <StatCards />

                <h1 className="text-2xl font-bold mb-6">Education & Certifications</h1>

              
                <section className="mt-6 card">
                    <h3 className="font-semibold mb-4">Education</h3>

                   
                    <div className="flex items-center gap-4 mt-3">
                        
                        <img src="/src/assets/1630661672997.jpg" alt="University logo" className="iwsf-logo" />
                        <div>
                            <h4 className="font-bold">Abubakar Tafawa Balewa University</h4>
                            <p className="text-sm">Master’s, Mental Health</p>
                            <p className="text-xs text-gray-300">Jan 2021 – Feb 2022</p>
                            <p className="text-sm mt-1">Grade: Distinction with honors</p>
                            <p className="text-sm">Activities and societies: Sports psychology.</p>
                            <p className="text-sm mt-1">
                                The psychological impact of training loads on swimmers during the training season.
                            </p>
                        </div>
                    </div>

                 
                    <div className="flex items-center gap-4 mt-3">
                      
                        <img src="/src/assets/1631340134012.jpg" alt="University logo" className="iwsf-logo" />
                        <div>
                            <h4 className="font-bold">Helwan University Cairo</h4>
                            <p className="text-sm">Bachelor’s degree, Physical Sciences</p>
                            <p className="text-xs text-gray-300">Sep 1993 – Jun 1997</p>
                        </div>
                    </div>
                </section>

              
                <section className="mt-6 card">
                    <h3 className="font-semibold mb-4">Selected Certifications</h3>
                    <ul className="mt-2">
                        <li>FINA International Swimming Coaches Certification</li>
                        <li>Advanced Sports Management — Monash University</li>
                        <li>IWSF Water Safety & Lifeguard Certification (Master Trainer)</li>
                        <li>Multiple IWSF master trainer certifications (Aqua Fitness, Baby Swimming, CPR/First Aid)</li>
                    </ul>

                 
                    <div className="mt-6 flex gap-3 flex-wrap">
                        <a
                            href="https://drive.google.com/file/d/17CtDwC8sOvlG9c3kczuqJ4xUbnucnsrT/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-theme"
                        >
                            <Icon icon="mdi:file-pdf" width="18" height="18" /> View All Certificates
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Education;
