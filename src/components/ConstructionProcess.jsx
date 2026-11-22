import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { images, processSteps } from '../data/siteData'

export default function ConstructionProcess() {
  return (
    <section id="process" className="section section--process">
      <div className="container process__grid">
        <motion.div
          className="process__intro"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="PROCESS OF CONSTRUCTION"
            title={
              <>
                How it works
                <br />
                in construction?
              </>
            }
            shape="HOW?"
            align="left"
          />
          <p className="process__text">
            Slogan creation for your construction company is
            <br />
            crucial for the overall branding.
          </p>
          <img
            className="process__image"
            src={images.processImage}
            width="650"
            height="370"
            alt="Process"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="process__steps"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="process__box">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="process-step"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: 'easeOut' }}
              >
                <span className="process-step__number" aria-hidden="true">
                  {step.number}
                </span>
                <div className="process-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
