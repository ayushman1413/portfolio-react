import { motion } from 'framer-motion'
import './Resume.css'

const Resume = () => {
  const education = [
    {
      title: 'Bachelor of Technology',
      institution: 'SAITM, Delhi',
      period: '2022 - Present',
      description: 'Pursuing a degree in Computer Science with focus on Web Development'
    },
    {
      title: 'Senior Secondary',
      institution: 'Your School Name',
      period: '2020 - 2022',
      description: 'Completed 12th with distinction'
    },
  ]

  const experience = [
    {
      title: 'Freelance Web Developer',
      company: 'Self Employed',
      period: '2024 - Present',
      description: 'Building custom websites and web applications for clients'
    },
    {
      title: 'Web Developer Intern',
      company: 'Tech Company',
      period: '2023 - 2024',
      description: 'Developed responsive websites and worked on frontend projects'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="resume-section">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>
        <span className="section-line"></span>
        <motion.a
          href="#download"
          className="btn primary-btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>

      <div className="resume-content">
        <motion.div 
          className="resume-column"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="resume-title">
            <i className="fas fa-graduation-cap"></i> Education
          </h3>
          
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="resume-item"
              variants={itemVariants}
            >
              <h4>{edu.title}</h4>
              <h5>{edu.institution}</h5>
              <span className="resume-place">{edu.period}</span>
              <p>{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="resume-column"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="resume-title">
            <i className="fas fa-briefcase"></i> Experience
          </h3>
          
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="resume-item"
              variants={itemVariants}
            >
              <h4>{exp.title}</h4>
              <h5>{exp.company}</h5>
              <span className="resume-place">{exp.period}</span>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
