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
        <nav className="bg-transparent fixed w-full z-40 top-0 left-0">
            <div className="container flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                    <Link to="/" className="text-white font-bold text-lg">Usama Sayed</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.path} className={location.pathname === link.path ? "text-theme font-semibold" : "text-white"}>
                            {link.name}
                        </Link>
                    ))}

                    {/* LinkedIn icon (clickable) */}
                    <a href="https://www.linkedin.com/in/usama-sayed-90a384289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="ml-3">
                        <Icon icon="akar-icons:linkedin-box-fill" width="28" height="28" />
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <Icon icon={isMenuOpen ? "akar-icons:cross" : "akar-icons:menu"} width="28" height="28" />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-darktheme/90 p-4">
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.path} className="block py-2" onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://www.linkedin.com/in/usama-sayed-abdelmobdy" target="_blank" rel="noreferrer" className="block py-2">LinkedIn</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
