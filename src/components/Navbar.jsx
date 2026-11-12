import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Icon } from "@iconify/react"

const navLinks = [
  { name: "Home", path: "/" }, { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" }, { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const renderLinks = (mobile = false) => navLinks.map(({ name, path }) => (
    <Link key={path} to={path} className={`nav-link ${location.pathname === path ? "is-active" : ""}`}
      aria-current={location.pathname === path ? "page" : undefined}
      onClick={() => mobile && setIsMenuOpen(false)}>{name}</Link>
  ))

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={() => setIsMenuOpen(false)}>
          <span>Usama Sayed</span><small>Sport & aquatics</small>
        </Link>
        <div className="nav-links">{renderLinks()}</div>
        <a className="nav-external" href="https://www.blackviral.club/" target="_blank" rel="noreferrer">Black Viral <span aria-hidden="true">↗</span></a>
        <button type="button" className="menu-button" aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon icon={isMenuOpen ? "akar-icons:cross" : "akar-icons:menu"} width="24" height="24" />
        </button>
      </div>
      {isMenuOpen && <div className="mobile-navigation" id="mobile-navigation">
        {renderLinks(true)}
        <a className="nav-link" href="https://www.blackviral.club/" target="_blank" rel="noreferrer">Black Viral Academy <span aria-hidden="true">↗</span></a>
      </div>}
    </nav>
  )
}
export default Navbar
