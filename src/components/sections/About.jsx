import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const personalInfo = [
    { title: 'Birthday:', value: '22 Jan 2006' },
    { title: 'Website:', value: 'www.ayush.com' },
    { title: 'Phone:', value: '+91 8887340368' },
    { title: 'City:', value: 'East Delhi, 110092' },
    { title: 'Age:', value: '19' },
    { title: 'Degree:', value: 'Bachelor' },
    { title: 'Email:', value: 'ayushman1413@gmail.com' },
    { title: 'Freelance:', value: 'Available' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section className="about-section">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <span className="section-line"></span>
      </div>

      <div className="about-content">
        <motion.div 
          className="about-img"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://via.placeholder.com/400?text=About+Me" 
            alt="About Me"
            className="about-image"
          />
        </motion.div>

        <motion.div 
          className="about-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants}>Web Developer & Designer</motion.h3>
          
          <motion.p variants={itemVariants}>
            I am a passionate Web Developer and Designer with expertise in creating responsive, user-friendly
            websites and applications. With a strong foundation in front-end and back-end technologies, I deliver
            high-quality solutions that meet client needs and exceed expectations.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            My approach combines technical expertise with creative problem-solving to build digital experiences that
            are both functional and visually appealing. I&apos;m constantly learning and exploring new technologies to stay
            at the forefront of web development trends.
          </motion.p>

          <motion.div 
            className="personal-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personalInfo.map((info, index) => (
              <motion.div key={index} className="info-item" variants={itemVariants}>
                <span className="info-title">{info.title}</span>
                <span className="info-value">{info.value}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="about-links"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com/ayushman1413"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
              variants={itemVariants}
            >
              <i className="fab fa-github"></i> GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ayushman01"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
              variants={itemVariants}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/ayushman__01"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
              variants={itemVariants}
            >
              <i className="fab fa-instagram"></i> Instagram
            </motion.a>
          </motion.div>

          <motion.a 
            href="#download"
            className="btn primary-btn"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
