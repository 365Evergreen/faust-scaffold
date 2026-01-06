import styles from '../styles/home.module.css'

export default function HomeHero({ title, subtitle }) {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </header>
  )
}
