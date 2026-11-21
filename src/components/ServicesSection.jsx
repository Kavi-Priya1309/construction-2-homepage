import SectionTitle from './SectionTitle'
import ConsultationBanner from './ConsultationBanner'
import { services } from '../data/siteData'

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="section section--services-head">
        <div className="container">
          <SectionTitle
            eyebrow="WHAT WE CAN DO FOR YOU"
            title="Our construction services"
            shape="SERVICES"
            align="center"
          />
        </div>
      </section>

      <section className="section section--services">
        <div className="container">
          <div className="services__grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
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
              </article>
            ))}
          </div>

          <ConsultationBanner />
        </div>
      </section>
    </>
  )
}
