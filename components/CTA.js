import styles from '../styles/home.module.css'

export default function CTA({ title = 'Ready to get started?', buttonText = 'Contact Us' }) {
  return (
    <div className={styles.cta} role="region" aria-labelledby="cta-heading">
      <div className={styles.ctaInner}>
        <h2 id="cta-heading">{title}</h2>
        <a className={styles.ctaButton} href="/home#contact" role="button" aria-label={`${buttonText} - scroll to contact section`}>{buttonText}</a>
      </div>
    </div>
  )
}
