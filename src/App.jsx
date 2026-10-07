import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">

      <Navbar />

      <Home />

      <About />

      <Skills />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />

    </div>
  )
}

export default App