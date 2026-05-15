import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom website development with modern technologies and responsive design for optimal user experience.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating websites that work flawlessly across all devices, from desktops to smartphones.'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces that enhance the overall user experience.'
    },
    {
      icon: 'fas fa-database',
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs to power your web applications.'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO Optimization',
      description: 'Improving your website\'s visibility in search engines to attract more organic traffic.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Website Maintenance',
      description: 'Regular updates, security patches, and performance optimization to keep your website running smoothly.'
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
    <section className="services-section">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <span className="section-line"></span>
      </div>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(108, 99, 255, 0.3)' }}
          >
            <motion.div 
              className="service-icon"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className={service.icon}></i>
            </motion.div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
