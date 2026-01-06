import styles from '../styles/home.module.css'

export default function CTA({ title = 'Ready to get started?', buttonText = 'Contact Us' }) {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2>{title}</h2>
        <a className={styles.ctaButton} href="/home#contact">{buttonText}</a>
      </div>
    </div>
  )
}
