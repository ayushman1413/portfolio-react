import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose, onThemeToggle, isDarkTheme }) => {
  const [activeLink, setActiveLink] = useState('home')

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About me', icon: 'fas fa-user' },
    { id: 'portfolio', label: 'My Projects', icon: 'fas fa-briefcase' },
    { id: 'services', label: 'Services', icon: 'fas fa-laptop-code' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'resume', label: 'Resume', icon: 'fas fa-file' },
    { id: 'testimonials', label: 'Testimonials', icon: 'fas fa-comments' },
    { id: 'certificates', label: 'Certificates', icon: 'fas fa-certificate' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
  ]

  const handleNavClick = (id) => {
    setActiveLink(id)
    const event = new CustomEvent('navigate', { detail: id })
    window.dispatchEvent(event)
    onClose()
  }

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <motion.div 
        className="profile"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="profile-img">
          <img src="https://via.placeholder.com/120?text=Profile" alt="Profile Picture" />
        </div>
        <h2 className="name">Ayushman Vishwakarma</h2>
        <div className="social-icons">
          <motion.a 
            href="https://github.com/ayushman1413" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/ayushman01" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/ayushman__01" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
          <motion.a 
            href="https://wa.me/qr/DLA6TIZZUVKUL1" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <i className="fab fa-whatsapp"></i>
          </motion.a>
          <motion.a 
            href="https://www.facebook.com/share/19VLd527yQ/" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <i className="fab fa-facebook-f"></i>
          </motion.a>
        </div>
      </motion.div>

      <nav className="menu">
        <ul>
          {navLinks.map((link) => (
            <motion.li 
              key={link.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={activeLink === link.id ? 'active' : ''}
            >
              <button 
                onClick={() => handleNavClick(link.id)}
                className="nav-button"
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="theme-toggle">
        <motion.button 
          id="theme-toggle-btn"
          onClick={onThemeToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'}></i>
          <span>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
        </motion.button>
      </div>
    </aside>
  )
}

export default Sidebar
