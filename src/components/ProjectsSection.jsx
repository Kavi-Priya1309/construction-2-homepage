import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { projects } from '../data/siteData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionTitle
            eyebrow="WE ARE PROFESSIONAL"
            title="Our latest projects"
            shape="SERVICES"
            align="center"
          />
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.1, ease: 'easeOut' }}
            >
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
                    <ExternalLink size={20} strokeWidth={2.4} />
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.categories}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
