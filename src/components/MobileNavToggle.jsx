import { motion } from 'framer-motion'
import './MobileNavToggle.css'

const MobileNavToggle = ({ onClick }) => {
  return (
    <motion.button
      className="mobile-nav-toggle"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fas fa-bars"></i>
    </motion.button>
  )
}

export default MobileNavToggle
