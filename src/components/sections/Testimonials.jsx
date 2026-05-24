import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)


  
  const testimonials = [
    {
      text: 'Ayushman created an outstanding website for my business. His attention to detail and creative approach exceeded my expectations. Highly recommended!',
      author: 'Client 1',
      title: 'CEO, Tech Solutions',
      image: 'https://via.placeholder.com/60?text=C1'
    },
    {
      text: 'Working with Ayushman was a pleasure. He delivered the project on time and was very responsive to all my requests and feedback. I\'ll definitely work with him again!',
      author: 'Client 2',
      title: 'Marketing Director, Innovate Inc.',
      image: 'https://via.placeholder.com/60?text=C2'
    },
    {
      text: 'Ayushman\'s technical skills and creativity are impressive. He transformed our outdated website into a modern, user-friendly platform that has significantly improved our online presence.',
      author: 'Client 3',
      title: 'Founder, Digital Creatives',
      image: 'https://via.placeholder.com/60?text=C3'
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="testimonials-section">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>
        <span className="section-line"></span>
        <motion.h3
          className="testimonials-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What My Clients Say
        </motion.h3>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-item"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <i className="fas fa-quote-left quote-icon"></i>
                  <p>{testimonials[currentIndex].text}</p>
                </div>

                <div className="testimonial-author">
                  <div className="author-img">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                    />
                  </div>
                  <div className="author-info">
                    <h4>{testimonials[currentIndex].author}</h4>
                    <p>{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonial-controls">
          <motion.button
            className="testimonial-btn testimonial-prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.3 }}
                animate={{ scale: currentIndex === index ? 1.3 : 1 }}
              ></motion.button>
            ))}
          </div>

          <motion.button
            className="testimonial-btn testimonial-next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-chevron-right"></i>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
