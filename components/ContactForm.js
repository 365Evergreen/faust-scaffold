import { useState } from 'react'
import styles from '../styles/home.module.css'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — this is a placeholder form. Implement server handling to process submissions.')
  }

  return (
    <form id="contact" className={styles.contactForm} onSubmit={handleSubmit} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.visuallyHidden}>Contact form</h2>
      <label htmlFor="contact-name">
        Name
        <input id="contact-name" name="name" value={form.name} onChange={handleChange} aria-required="true" />
      </label>
      <label htmlFor="contact-email">
        Email
        <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} aria-required="true" />
      </label>
      <label htmlFor="contact-message">
        Message
        <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} aria-required="true" />
      </label>
      <button type="submit">Send</button>
      <div aria-live="polite" aria-atomic="true">{status && <p className={styles.formStatus}>{status}</p>}</div>
    </form>
  )
}
