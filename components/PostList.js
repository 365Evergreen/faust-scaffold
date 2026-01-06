import { useQuery } from '@apollo/client'
import ExampleQuery from '../queries/ExampleQuery'
import styles from '../styles/home.module.css'

export default function PostList() {
  const { data, loading, error } = useQuery(ExampleQuery)

  if (loading) return <p>Loading posts…</p>
  if (error) return <p>Error loading posts.</p>

  const posts = data?.posts?.nodes || []

  if (posts.length === 0) return <p>No posts found.</p>

  return (
    <ul className={styles.postList} aria-live="polite">
      {posts.map((post) => (
        <li key={post.id} className={styles.postItem}>
          <a href={`/${post.slug}`} aria-label={`Read post ${post.title}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  )
}
