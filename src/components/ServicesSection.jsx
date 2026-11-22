import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import ConsultationBanner from './ConsultationBanner'
import { services } from '../data/siteData'

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="section section--services-head">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <SectionTitle
              eyebrow="WHAT WE CAN DO FOR YOU"
              title="Our construction services"
              shape="SERVICES"
              align="center"
            />
          </motion.div>
        </div>
      </section>

      <section className="section section--services">
        <div className="container">
          <div className="services__grid">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.18, ease: 'easeOut' }}
              >
                <div className="service-card__media">
                  <img
                    src={service.icon}
                    width="180"
                    height="125"
                    alt={service.iconAlt}
                    loading="lazy"
                  />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>
                <a className="btn btn--service" href="#quote">
                  Read More
                </a>
              </motion.article>
            ))}
          </div>

          <ConsultationBanner />
        </div>
      </section>
    </>
  )
}
