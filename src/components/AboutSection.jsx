import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { aboutPoints, images } from '../data/siteData'

export default function AboutSection() {
  return (
    <section id="about" className="section section--about">
      <div className="container about__grid">
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="about__yellow" aria-hidden="true" />
          <img
            className="about__image"
            src={images.aboutImage}
            width="800"
            height="765"
            alt="About company"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="ABOUT OUR COMPANY"
            title="Always dedicated and devoted"
            shape="ABOUT"
            align="left"
            titleTag="h2"
          />
          <p className="about__text">
            Slogan creation for your construction company is crucial for the overall branding. And
            branding in today’s world can’t be ignored, We hope that the above Construction Slogans.
            Don’t forget to share it on social media and related building communities.
          </p>

          <ul className="about__list">
            {aboutPoints.map((point) => (
              <li key={point}>
                <span className="about__check" aria-hidden="true">
                  <Check size={22} strokeWidth={2} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
