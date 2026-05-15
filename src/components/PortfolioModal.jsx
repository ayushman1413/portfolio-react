import { motion } from 'framer-motion'
import './PortfolioModal.css'

const PortfolioModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="portfolio-modal"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>

          <div className="modal-img">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="modal-description">
            <p>{project.description}</p>
          </div>

          <div className="modal-details">
            <div className="modal-detail">
              <h4>GitHub</h4>
              <a 
                href="https://github.com/ayushman1413"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
            <div className="modal-detail">
              <h4>Year</h4>
              <p>{project.year}</p>
            </div>
            <div className="modal-detail">
              <h4>Project</h4>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PortfolioModal
