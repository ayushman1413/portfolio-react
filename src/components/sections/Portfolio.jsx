import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PortfolioModal from '../PortfolioModal'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const portfolioItems = [
    {
      id: 1,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://via.placeholder.com/300?text=Restaurant',
      description: 'A modern restaurant website with menu display and online ordering system.',
      url: 'https://restaurant-demo.com',
      year: 'March 2025'
    },
    {
      id: 2,
      title: 'Weather App',
      category: 'app',
      image: 'https://via.placeholder.com/300?text=Weather+App',
      description: 'Real-time weather application with location detection.',
      url: 'https://weather-app-demo.com',
      year: 'February 2025'
    },
    {
      id: 3,
      title: 'Calculator App',
      category: 'app',
      image: 'https://via.placeholder.com/300?text=Calculator',
      description: 'Advanced calculator with scientific functions.',
      url: 'https://calculator-demo.com',
      year: 'January 2025'
    },
    {
      id: 4,
      title: 'E-Learning Platform',
      category: 'web',
      image: 'https://via.placeholder.com/300?text=E-Learning',
      description: 'Interactive platform for online courses and learning management.',
      url: 'https://elearning-demo.com',
      year: 'December 2024'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'app',
      image: 'https://via.placeholder.com/300?text=Food+Delivery',
      description: 'Full-featured food delivery mobile application.',
      url: 'https://fooddelivery-demo.com',
      year: 'November 2024'
    },
    {
      id: 6,
      title: 'Portfolio Site',
      category: 'web',
      image: 'https://via.placeholder.com/300?text=Portfolio',
      description: 'Personal portfolio website with modern design.',
      url: 'https://portfolio-demo.com',
      year: 'October 2024'
    },
  ]

  const filters = ['all', 'web', 'app']

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="portfolio-section">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <span className="section-line"></span>
      </div>

      <div className="portfolio-filters">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="portfolio-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div 
              key={item.id}
              className="portfolio-item"
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="portfolio-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <motion.button
                  className="portfolio-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(item)}
                >
                  <i className="fas fa-plus"></i>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <PortfolioModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio
