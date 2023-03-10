import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Skills from './components/skills/Skills.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
