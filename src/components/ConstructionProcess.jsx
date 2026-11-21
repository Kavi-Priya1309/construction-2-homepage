import SectionTitle from './SectionTitle'
import { images, processSteps } from '../data/siteData'

export default function ConstructionProcess() {
  return (
    <section id="process" className="section section--process">
      <div className="container process__grid">
        <div className="process__intro">
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
        </div>

        <div className="process__steps">
          <div className="process__box">
            {processSteps.map((step) => (
              <div key={step.number} className="process-step">
                <span className="process-step__number" aria-hidden="true">
                  {step.number}
                </span>
                <div className="process-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
