import { motion } from 'framer-motion'
import { images } from '../data/siteData'

export default function ConsultationBanner() {
  return (
    <motion.div
      className="consultation"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="consultation__content">
        <img
          className="consultation__icon"
          src={images.safetyIcon}
          width="80"
          height="67"
          alt="Safety icon"
          loading="lazy"
        />
        <div>
          <h3 className="consultation__title">
            <span>Building a dream</span> shouldn’t be a nightmare!
          </h3>
          <p className="consultation__text">
            We have transforming the ideas and visions into winning projects.
          </p>
        </div>
      </div>
      <a className="btn btn--consultation" href="#quote">
        Free Consultation
      </a>
    </motion.div>
  )
}
