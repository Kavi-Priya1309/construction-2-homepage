import { motion } from 'framer-motion'
import { clientLogos } from '../data/siteData'

export default function ClientLogos() {
  return (
    <section className="logos" aria-label="Clients">
      <motion.div
        className="logos__strip"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="logos__inner">
          {clientLogos.map((logo) => (
            <a
              key={logo.id}
              className="logos__item"
              href="#projects"
              title="Construction Company"
              aria-label="See projects for this client"
            >
              <div className="logos__flip-wrap">
                <img
                  className="logos__img-main"
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                  loading="lazy"
                />
                <img
                  className="logos__img-hover"
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
