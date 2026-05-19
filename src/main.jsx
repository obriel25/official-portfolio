import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Projects'
import Contact from './components/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero/>
    <About />
    <Project />
    <Contact />
     <footer className="text-center text-gray-500 text-sm py-6 bg-gray-950">
      © 2026 Jefferson Obriel. Built with React & Tailwind CSS.
    </footer>
  </StrictMode>,
)
