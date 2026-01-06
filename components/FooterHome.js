import styles from '../styles/home.module.css'

export default function FooterHome() {
  return (
    <footer className={styles.homeFooter}>
      <div className={styles.homeFooterInner}>
        <p>© {new Date().getFullYear()} Example Site — Built with Faust</p>
        <nav>
          <a href="/">Home</a> · <a href="/privacy">Privacy</a> · <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
