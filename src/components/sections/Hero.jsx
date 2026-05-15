import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import './Hero.css'

const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    const typed = new Typed('.typed-text', {
      strings: [
        'Web Developer',
        'UI/UX Designer',
        'Freelancer',
        'Full Stack Developer',
        'Web Designer',
        'Frontend Developer'
      ],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    })

    return () => typed.destroy()
  }, [])

  const handleNavigate = (id) => {
    const event = new CustomEvent('navigate', { detail: id })
    window.dispatchEvent(event)
  }

  return (
    <section className="hero-section">
      <div className="hero">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ayushman
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m a <span className="typed-text"></span>
        </motion.p>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            className="btn primary-btn"
            onClick={() => handleNavigate('about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
          <motion.button 
            className="btn secondary-btn"
            onClick={() => handleNavigate('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
