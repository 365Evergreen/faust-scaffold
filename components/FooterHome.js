import styles from '../styles/home.module.css'

export default function FooterHome() {
  return (
    <footer className={styles.homeFooter} role="contentinfo">
      <div className={styles.homeFooterInner}>
        <p>© {new Date().getFullYear()} Example Site — Built with Faust</p>
        <nav aria-label="Footer navigation">
          <a href="/" aria-label="Go to home">Home</a> · <a href="/privacy" aria-label="Privacy policy">Privacy</a> · <a href="/contact" aria-label="Contact page">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
