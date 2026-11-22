import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { testimonials } from '../data/siteData'

const AUTOPLAY_DELAY = 9000

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    if (paused) return undefined
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % testimonials.length),
      AUTOPLAY_DELAY,
    )
    return () => window.clearTimeout(timer)
  }, [active, paused])

  useEffect(() => {
    const node = trackRef.current
    if (!node) return undefined
    const onKey = (event) => {
      if (event.key === 'ArrowRight') setActive((c) => (c + 1) % testimonials.length)
      if (event.key === 'ArrowLeft')
        setActive((c) => (c - 1 + testimonials.length) % testimonials.length)
    }
    node.addEventListener('keydown', onKey)
    return () => node.removeEventListener('keydown', onKey)
  }, [])

  const onPointerDown = (event) => {
    startX.current = event.clientX
    setPaused(true)
  }

  const onPointerUp = (event) => {
    if (startX.current === null) return
    const delta = event.clientX - startX.current
    if (Math.abs(delta) > 50) {
      setActive((current) => {
        const next = delta < 0 ? current + 1 : current - 1
        return (next + testimonials.length) % testimonials.length
      })
    }
    startX.current = null
    setPaused(false)
  }

  return (
    <section id="testimonials" className="section section--testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="SEE WHAT SAYS OUR HAPPY CLIENTS"
            title="Our happy customers"
            shape="TESTIMONIALS"
            align="center"
          />
        </motion.div>

        <motion.div
          className="testimonials"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="testimonials__viewport">
          <div
            className="testimonials__track"
            ref={trackRef}
            tabIndex={0}
            style={{ transform: `translateX(-${active * 100}%)` }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              startX.current = null
              setPaused(false)
            }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className={`testimonial${index === active ? ' is-active' : ''}`}
                aria-hidden={index !== active}
                aria-label={`${index + 1} of ${testimonials.length}`}
              >
                <div className="testimonial__inner">
                  <img
                    className="testimonial__avatar"
                    src={testimonial.avatar}
                    width="200"
                    height="200"
                    alt=""
                    loading="lazy"
                  />
                  <div className="testimonial__box">
                    <p className="testimonial__quote">{testimonial.quote}</p>
                    <p className="testimonial__author">{testimonial.author}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          </div>

          <div className="testimonials__dots" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show testimonial ${index + 1}`}
                className={`testimonials__dot${index === active ? ' is-active' : ''}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
