import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Icon } from "@iconify/react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Experience", path: "/experience" },
        { name: "Education", path: "/education" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <nav className="bg-darktheme/95 backdrop-blur-sm fixed w-full z-50 top-0 left-0 border-b border-white/10">
            <div className="container flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                    <Link to="/" className="text-white font-bold text-lg">Usama Sayed</Link>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            className={`px-3 py-2 rounded-lg transition-colors ${
                                location.pathname === link.path 
                                    ? "text-theme font-semibold bg-theme/10" 
                                    : "text-white hover:text-theme"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* LinkedIn icon */}
                    <a 
                        href="https://www.linkedin.com/in/usama-sayed-90a384289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="LinkedIn profile" 
                        className="ml-2 text-white hover:text-theme transition-colors"
                    >
                        <Icon icon="akar-icons:linkedin-box-fill" width="28" height="28" />
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        aria-label="Toggle menu"
                        className="text-white p-2"
                    >
                        <Icon icon={isMenuOpen ? "akar-icons:cross" : "akar-icons:menu"} width="28" height="28" />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-darktheme/95 backdrop-blur-lg border-t border-white/10">
                    <div className="container py-4">
                        {navLinks.map(link => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className={`block py-3 px-4 rounded-lg transition-colors ${
                                    location.pathname === link.path 
                                        ? "text-theme font-semibold bg-theme/10" 
                                        : "text-white hover:text-theme"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a 
                            href="https://www.linkedin.com/in/usama-sayed-90a384289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="block py-3 px-4 text-white hover:text-theme transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar