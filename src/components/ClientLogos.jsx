import { clientLogos } from '../data/siteData'

export default function ClientLogos() {
  return (
    <section className="logos" aria-label="Clients">
      <div className="logos__strip">
        <div className="logos__inner">
          {clientLogos.map((logo) => (
            <a
              key={logo.id}
              className="logos__item"
              href="#projects"
              title="Construction Company"
              aria-label="See projects for this client"
            >
              <img
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
