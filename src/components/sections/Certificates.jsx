import { motion } from 'framer-motion'
import './Certificates.css'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'React Developer',
      issuer: 'Udemy',
      image: 'https://via.placeholder.com/300?text=React+Certificate',
      link: '#'
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      issuer: 'Codecademy',
      image: 'https://via.placeholder.com/300?text=Web+Dev',
      link: '#'
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      issuer: 'freeCodeCamp',
      image: 'https://via.placeholder.com/300?text=JavaScript',
      link: '#'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      issuer: 'Coursera',
      image: 'https://via.placeholder.com/300?text=UI+UX',
      link: '#'
    },
    {
      id: 5,
      title: 'Node.js Complete Guide',
      issuer: 'Udemy',
      image: 'https://via.placeholder.com/300?text=Node.js',
      link: '#'
    },
    {
      id: 6,
      title: 'MongoDB Essentials',
      issuer: 'MongoDB University',
      image: 'https://via.placeholder.com/300?text=MongoDB',
      link: '#'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="certificates-section">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>
        <span className="section-line"></span>
      </div>

      <motion.div 
        className="certificates-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certificates.map((cert) => (
          <motion.div 
            key={cert.id}
            className="certificate-item"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(108, 99, 255, 0.3)' }}
          >
            <div className="certificate-img">
              <img src={cert.image} alt={cert.title} />
              <div className="certificate-overlay">
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-view-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-eye"></i>
                </motion.a>
              </div>
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Certificates
