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
    <form id="contact" className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        Message
        <textarea name="message" value={form.message} onChange={handleChange} />
      </label>
      <button type="submit">Send</button>
      {status && <p className={styles.formStatus}>{status}</p>}
    </form>
  )
}
