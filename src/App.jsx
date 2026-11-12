import { useEffect } from "react"
import { Link, Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Contact from "./pages/Contact"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} /><Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <footer className="site-footer"><div className="footer-inner">
      <Link to="/" className="footer-name">Usama Sayed Abdelmobdy</Link>
      <span>Aquatics · Coaching · Sports leadership</span>
      <a href="mailto:omobdy13@gmail.com">omobdy13@gmail.com</a>
    </div></footer>
  </>
}
export default App
