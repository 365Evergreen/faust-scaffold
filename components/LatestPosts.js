import PostList from './PostList'
import styles from '../styles/home.module.css'

export default function LatestPosts() {
  return (
    <div className={styles.latestPosts}>
      <h2>Latest Posts</h2>
      <PostList />
    </div>
  )
}
