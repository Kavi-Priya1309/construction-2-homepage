import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { departments } from '../data/siteData'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  department: departments[0],
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  return errors
}

export default function QuoteForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      const firstField = Object.keys(nextErrors)[0]
      document.getElementById(`quote-${firstField}`)?.focus()
      return
    }
    setSent(true)
  }

  return (
    <section id="quote" className="section section--quote">
      <div className="container quote__grid">
        <motion.div
          className="quote__panel"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="sec-head__shape" aria-hidden="true">
            QUOTE
          </span>
          <span className="sec-head__eyebrow">INTERESTED IN CONSTRUCTION?</span>
          <h2 className="sec-head__title quote__title">Request a free and fair quote</h2>
          <p className="quote__text">
            Slogan creation for your construction company is crucial for the overall branding. And
            branding in today’s world can’t be ignored, We hope that the above Construction Slogans.
            Don’t forget to share it on social media.
          </p>
        </motion.div>

        <motion.div
          className="quote__form-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        >
          {sent ? (
            <motion.div
              className="quote__success"
              role="status"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <CheckCircle2 size={44} strokeWidth={1.5} aria-hidden="true" />
              <h3>Thank you, {values.name.trim().split(' ')[0]}!</h3>
              <p>
                Your request has been validated on this page. This demo has no backend, so nothing
                was sent to a server.
              </p>
              <button
                type="button"
                className="btn btn--service"
                onClick={() => {
                  setValues(initialValues)
                  setSent(false)
                }}
              >
                Send another request
              </button>
            </motion.div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit} noValidate>
              <div className="quote-form__row">
                <div className="field">
                  <label htmlFor="quote-name">
                    Your Name (required)
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'quote-name-error' : undefined}
                  />
                  {errors.name ? (
                    <span className="field__error" id="quote-name-error">
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="quote-email">Your Email (required)</label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'quote-email-error' : undefined}
                  />
                  {errors.email ? (
                    <span className="field__error" id="quote-email-error">
                      {errors.email}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="quote-form__row">
                <div className="field">
                  <label htmlFor="quote-subject">Subject</label>
                  <input
                    id="quote-subject"
                    name="subject"
                    type="text"
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="field">
                  <label htmlFor="quote-department">Departemant</label>
                  <select
                    id="quote-department"
                    name="department"
                    value={values.department}
                    onChange={handleChange}
                  >
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field field--full">
                <label htmlFor="quote-message">Your Message</label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows="7"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--submit">
                Send
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
