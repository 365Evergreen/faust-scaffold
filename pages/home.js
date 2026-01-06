import Head from 'next/head'
import HomeHero from '../components/HomeHero'
import PostList from '../components/PostList'
import styles from '../styles/home.module.css'
import { getNextStaticProps } from '@faustwp/core'
import ExampleQuery from '../queries/ExampleQuery'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home — Faust Scaffold</title>
      </Head>
      <main className={styles.container}>
        <HomeHero title="Welcome to the site" subtitle="Built with Faust + Next.js" />
        <section className={styles.content}>
          <h2>Latest content</h2>
          <PostList />
        </section>
      </main>
    </>
  )
}

Home.query = ExampleQuery

export function getStaticProps(ctx) {
  return getNextStaticProps(ctx, {
    Page: Home,
  })
}
