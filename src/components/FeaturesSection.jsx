import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { features, images } from '../data/siteData'

export default function FeaturesSection() {
  return (
    <section id="features" className="section section--features">
      <div className="container">
        <motion.div
          className="features__head"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img
            className="features__icon"
            src={images.safetyIcon}
            width="80"
            height="67"
            alt="Safety icon"
            loading="lazy"
          />
          <SectionTitle
            eyebrow="FEATURES AT A GLANCE"
            title="We know what your needs are"
            align="center"
          />
        </motion.div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              className="feature-card"
              style={{ backgroundImage: `url(${feature.image})` }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.18, ease: 'easeOut' }}
            >
              <div className="feature-card__front">
                <div className="feature-card__bar">
                  <h3>{feature.title}</h3>
                  <ChevronUp size={20} aria-hidden="true" />
                </div>
              </div>
              <div
                className="feature-card__back"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(244, 192, 59, 0.95), rgba(244, 192, 59, 0.95)), url(${feature.image})`,
                }}
              >
                <h3 className="feature-card__back-title">{feature.title}</h3>
                <p className="feature-card__back-desc">{feature.description}</p>
                <a href={feature.href} className="feature-card__link">
                  Learn More ...
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
