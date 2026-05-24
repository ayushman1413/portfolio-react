import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import Resume from './sections/Resume'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'
import MobileNavToggle from './MobileNavToggle'
import './MainContent.css'

const MainContent = ({ onMobileNavToggle, isDarkTheme }) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleNavigate = (e) => {
      setActiveSection(e.detail)
    }

    window.addEventListener('navigate', handleNavigate)
    return () => window.removeEventListener('navigate', handleNavigate)
  }, [])

  const sections = [
    { id: 'home', component: Hero },
    { id: 'about', component: About },
    { id: 'portfolio', component: Portfolio },
    { id: 'services', component: Services },
    { id: 'skills', component: Skills },
    { id: 'resume', component: Resume },
    { id: 'testimonials', component: Testimonials },
    { id: 'certificates', component: Certificates },
    { id: 'contact', component: Contact },
  ]

  return (
    <main className="main-content">
      <MobileNavToggle onClick={onMobileNavToggle} />
      
      {sections.map(({ id, component: Component }) => (
        <motion.div
          key={id}
          className={`section ${activeSection === id ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeSection === id ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            display: activeSection === id ? 'block' : 'none',
            pointerEvents: activeSection === id ? 'auto' : 'none'
          }}
        >
          <Component />
        </motion.div>
      ))}
    </main>
  )
}


export default MainContent
