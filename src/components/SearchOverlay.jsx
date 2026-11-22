import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { projects, services } from '../data/siteData'

const index = [
  ...services.map((service) => ({ title: service.title, href: '#services', type: 'Service' })),
  ...projects.map((project) => ({
    title: project.title,
    href: '#projects',
    type: 'Project',
  })),
  { title: 'Building Engineering', href: '#features', type: 'Feature' },
  { title: 'Safety First', href: '#features', type: 'Feature' },
  { title: 'Road Construction', href: '#features', type: 'Feature' },
  { title: 'Construction process', href: '#process', type: 'Section' },
  { title: 'Request a quote', href: '#quote', type: 'Section' },
]

export default function SearchOverlay({ open, onClose }) {
  const [term, setTerm] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTerm('')
      const timer = window.setTimeout(() => inputRef.current?.focus(), 80)
      return () => window.clearTimeout(timer)
    }
    return undefined
  }, [open])

  const results = useMemo(() => {
    const query = term.trim().toLowerCase()
    if (!query) return []
    return index.filter((item) => item.title.toLowerCase().includes(query)).slice(0, 6)
  }, [term])

  return (
    <AnimatePresence>
      {open && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search">
          <motion.button
            type="button"
            className="search-overlay__backdrop"
            aria-hidden="true"
            tabIndex={-1}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="search-overlay__panel"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.35, ease: [0.9, 0.05, 0.1, 1] }}
          >
            <button
              type="button"
              className="search-overlay__close"
              aria-label="Close search"
              onClick={onClose}
            >
              <X size={22} aria-hidden="true" />
            </button>
            <form
              className="search-overlay__form"
              role="search"
              onSubmit={(event) => {
                event.preventDefault()
                if (results[0]) {
                  window.location.hash = results[0].href
                  onClose()
                }
              }}
            >
              <label className="sr-only" htmlFor="site-search">
                Type keyword to search
              </label>
              <input
                id="site-search"
                ref={inputRef}
                type="search"
                className="search-overlay__input"
                placeholder="Type keyword to search  ..."
                value={term}
                onChange={(event) => setTerm(event.target.value)}
              />
              <button type="submit" className="search-overlay__submit" aria-label="Search">
                <Search size={20} aria-hidden="true" />
              </button>
            </form>

            {term.trim() ? (
              <div className="search-overlay__results" aria-live="polite">
                {results.length ? (
                  <ul>
                    {results.map((result) => (
                      <li key={`${result.type}-${result.title}`}>
                        <a href={result.href} onClick={onClose}>
                          <span>{result.title}</span>
                          <small>{result.type}</small>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="search-overlay__empty">
                    No results for “{term.trim()}”. Try “building”, “road” or “house”.
                  </p>
                )}
              </div>
            ) : null}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
