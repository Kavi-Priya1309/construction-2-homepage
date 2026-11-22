import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import { images } from '../data/siteData'

const VIDEO_EMBED = 'https://www.youtube-nocookie.com/embed/FyS_zcvmUr4?autoplay=1&rel=0'

function VideoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="Why choose us video">
          <motion.button
            type="button"
            className="video-modal__backdrop"
            aria-label="Close video"
            tabIndex={-1}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="video-modal__body"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ duration: 0.35, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <button type="button" className="video-modal__close" aria-label="Close video" onClick={onClose}>
              <X size={22} aria-hidden="true" />
            </button>
            <div className="video-modal__frame">
              <iframe
                src={VIDEO_EMBED}
                title="Why choose us"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    setActive((index + 2) % 2)
  }, [])

  useEffect(() => {
    if (paused || videoOpen) return undefined
    timerRef.current = window.setTimeout(() => setActive((current) => (current + 1) % 2), 8000)
    return () => window.clearTimeout(timerRef.current)
  }, [active, paused, videoOpen])

  useEffect(() => {
    document.body.classList.toggle('is-locked', videoOpen)
    return () => document.body.classList.remove('is-locked')
  }, [videoOpen])

  return (
    <section
      id="home"
      className="hero"
      aria-label="Featured construction projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero__viewport">
        {/* Slide 1 */}
        <motion.div
          className={`hero__slide hero__slide--one${active === 0 ? ' is-active' : ''}`}
          aria-hidden={active !== 0}
          animate={{ opacity: active === 0 ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="hero__shapes" aria-hidden="true">
            <motion.div
              className="hero__shape-slot hero__shape-slot--a"
              initial={{ x: 600, opacity: 0 }}
              animate={{ x: active === 0 ? 0 : 600, opacity: active === 0 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="hero__shape hero__shape--a" />
            </motion.div>
            <motion.div
              className="hero__shape-slot hero__shape-slot--b"
              initial={{ x: 600, opacity: 0 }}
              animate={{ x: active === 0 ? 0 : 600, opacity: active === 0 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="hero__shape hero__shape--b" />
            </motion.div>
            <motion.div
              className="hero__shape-slot hero__shape-slot--solid"
              initial={{ x: 600, opacity: 0 }}
              animate={{ x: active === 0 ? 0 : 600, opacity: active === 0 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0.63, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="hero__shape hero__shape--solid" />
            </motion.div>
          </div>

          <motion.img
            className="hero__builder"
            src={images.heroBuilder}
            alt="Construction engineer wearing a hard hat"
            width="900"
            height="830"
            loading="eager"
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: active === 0 ? 0 : 250, opacity: active === 0 ? 1 : 0 }}
            transition={{ duration: 1.69, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <div className="hero__content">
            <motion.h1
              className="hero__title"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: active === 0 ? 0 : -50, opacity: active === 0 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0, ease: 'easeOut' }}
            >
              START
              <br />
              NEW
              <br />
              <span>PROJECTS</span>
            </motion.h1>
            <motion.p
              className="hero__subtitle"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: active === 0 ? 0 : -50, opacity: active === 0 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0.35, ease: 'easeOut' }}
            >
              Don’t get framed by the competition,
              <br />
              trust our solid reputation.
            </motion.p>

            <motion.div
              className="hero__video"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: active === 0 ? 0 : -50, opacity: active === 0 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0.89, ease: 'easeOut' }}
            >
              <button
                type="button"
                className="hero__play"
                aria-label="Play the Why choose us video"
                onClick={() => setVideoOpen(true)}
              >
                <Play size={26} fill="currentColor" aria-hidden="true" />
              </button>
              <button type="button" className="hero__watch" onClick={() => setVideoOpen(true)}>
                <span>Watch video</span>
                <b>Why choose us?</b>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Slide 2 */}
        <motion.div
          className={`hero__slide hero__slide--two${active === 1 ? ' is-active' : ''}`}
          aria-hidden={active !== 1}
          animate={{ opacity: active === 1 ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="hero__slide-bg" aria-hidden="true">
            <motion.img
              src={images.heroSlideTwo}
              alt=""
              initial={{ scale: 1.08 }}
              animate={{ scale: active === 1 ? 1 : 1.08 }}
              transition={{ duration: 8, ease: 'easeOut' }}
            />
          </div>
          <div className="hero__banners">
            <motion.p
              className="hero__banner hero__banner--navy"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: active === 1 ? 0 : 50, opacity: active === 1 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0.12, ease: 'easeOut' }}
            >
              Committed to superior quality and results
            </motion.p>
            <motion.p
              className="hero__banner hero__banner--yellow"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: active === 1 ? 0 : 50, opacity: active === 1 ? 1 : 0 }}
              transition={{ duration: 1.0, delay: 0.45, ease: 'easeOut' }}
            >
              We'll get it done, like us there are none
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="hero__nav">
        <button type="button" className="hero__arrow" aria-label="Previous slide" onClick={() => goTo(active - 1)}>
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <div className="hero__dots" role="tablist" aria-label="Slides">
          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Go to slide ${index + 1}`}
              className={`hero__dot${active === index ? ' is-active' : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button type="button" className="hero__arrow" aria-label="Next slide" onClick={() => goTo(active + 1)}>
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}
