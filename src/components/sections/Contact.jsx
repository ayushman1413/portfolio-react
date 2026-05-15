import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'ayushman1413@gmail.com',
      link: 'mailto:ayushman1413@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 8887340368',
      link: 'tel:+918887340368'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'East Delhi, 110092, DELHI',
      link: '#'
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('Sending...')

    try {
      // Simulate sending email - replace with actual EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
      setTimeout(() => setStatus(''), 3000)
    } finally {
      setLoading(false)
    }
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="contact-section">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <span className="section-line"></span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-subtitle"
        >
          Let&apos;s talk about your project
        </motion.p>
      </div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants}>Let&apos;s talk about your project</motion.h3>
          <motion.p variants={itemVariants}>
            Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
          </motion.p>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <motion.a 
                key={index}
                href={method.link}
                className="contact-method"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="method-icon">
                  <i className={method.icon}></i>
                </div>
                <div className="method-content">
                  <h4>{method.title}</h4>
                  <p>{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="social-links"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com/ayushman1413"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ayushman01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/ayushman__01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a 
              href="https://wa.me/qr/DLA6TIZZUVKUL1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <i className="fab fa-whatsapp"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} ref={formRef} className="contact-form">
            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </motion.div>

            <motion.div className="form-group" variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="btn primary-btn send-btn"
              disabled={loading}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? (
                <>
                  <span className="btn-loading"><i className="fas fa-spinner fa-spin"></i></span>
                  <span className="btn-text">Sending...</span>
                </>
              ) : (
                <span className="btn-text">Send Message</span>
              )}
            </motion.button>

            {status && (
              <motion.div
                className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {status}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
