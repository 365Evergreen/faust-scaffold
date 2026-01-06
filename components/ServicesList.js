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
    <div className={styles.services}>
      {items.map((s, i) => (
        <article key={i} className={styles.serviceItem}>
          <h3 dangerouslySetInnerHTML={{ __html: s.title }} />
          {s.featuredImage?.node?.sourceUrl && (
            <img src={s.featuredImage.node.sourceUrl} alt="" className={styles.serviceImage} />
          )}
          <div dangerouslySetInnerHTML={{ __html: s.content }} />
        </article>
      ))}
    </div>
  )
}
