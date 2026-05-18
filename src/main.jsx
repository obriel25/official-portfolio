import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import project from "./components/Projects"
import Project from './components/Projects'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <Navbar />
    <About />
    <Project />
  </StrictMode>,
)
