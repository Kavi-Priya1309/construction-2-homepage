import { ChevronUp } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { features, images } from '../data/siteData'

export default function FeaturesSection() {
  return (
    <section id="features" className="section section--features">
      <div className="container">
        <div className="features__head">
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
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="feature-card"
              style={{ backgroundImage: `url(${feature.image})` }}
            >
              <div className="feature-card__front">
                <div className="feature-card__bar">
                  <h3>{feature.title}</h3>
                  <ChevronUp size={20} aria-hidden="true" />
                </div>
              </div>
              <div className="feature-card__back">
                <p>{feature.description}</p>
                <a href={feature.href} className="feature-card__link">
                  Learn More ...
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
