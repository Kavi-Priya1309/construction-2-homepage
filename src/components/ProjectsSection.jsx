import { Maximize2 } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { projects } from '../data/siteData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <SectionTitle
          eyebrow="WE ARE PROFESSIONAL"
          title="Our latest projects"
          shape="SERVICES"
          align="center"
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <a href="#quote" className="project-card__link" aria-label={`View project ${project.title}`}>
                <img
                  src={project.image}
                  width="600"
                  height="600"
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <span className="project-card__icon" aria-hidden="true">
                    <Maximize2 size={24} strokeWidth={1.6} />
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.categories}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
