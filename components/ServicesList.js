import { useQuery } from '@apollo/client'
import ServicesQuery from '../queries/ServicesQuery'
import styles from '../styles/home.module.css'

export default function ServicesList() {
  const { data, loading, error } = useQuery(ServicesQuery)

  if (loading) return <p>Loading services…</p>
  if (error) return <p>Error loading services.</p>

  const items = data?.services?.nodes || []
  if (items.length === 0) return <p>No services found.</p>

  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <h2 id="services-heading" className={styles.visuallyHidden}>Services</h2>
      {items.map((s, i) => (
        <article key={i} className={styles.serviceItem} aria-labelledby={`service-title-${i}`}>
          <h3 id={`service-title-${i}`} dangerouslySetInnerHTML={{ __html: s.title }} />
          {s.featuredImage?.node?.sourceUrl && (
            <img src={s.featuredImage.node.sourceUrl} alt={s.title || `Service ${i + 1}`} className={styles.serviceImage} />
          )}
          <div dangerouslySetInnerHTML={{ __html: s.content }} />
        </article>
      ))}
    </section>
  )
}
