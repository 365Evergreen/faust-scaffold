import styles from '../styles/home.module.css'

export default function Features() {
  const cards = [
    { title: 'Fast', body: 'Optimized static builds and incremental regeneration.' },
    { title: 'Secure', body: 'Content lives in WordPress; front-end is static.' },
    { title: 'Flexible', body: 'Use fragments and queries to compose pages.' },
  ]

  return (
    <section className={styles.features}>
      {cards.map((c) => (
        <div key={c.title} className={styles.featureCard}>
          <div className={styles.featureIcon}>★</div>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
        </div>
      ))}
    </section>
  )
}
