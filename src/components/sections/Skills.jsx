import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillsRef = useRef(null)
  const skillBarsRef = useRef([])

  const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 100 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 70 },
    { name: 'Node.js', percentage: 75 },
    { name: 'Python', percentage: 40 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'TypeScript', percentage: 40 },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillBarsRef.current.forEach((bar) => {
            if (bar) {
              const percentage = bar.getAttribute('data-progress')
              bar.style.width = percentage
            }
          })
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
    <section className="skills-section" ref={skillsRef}>
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <span className="section-line"></span>
      </div>

      <motion.div 
        className="skills-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-item"
            variants={itemVariants}
          >
            <div className="skill-header">
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <motion.div 
                className="skill-progress"
                data-progress={`${skill.percentage}%`}
                ref={(el) => skillBarsRef.current[index] = el}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
