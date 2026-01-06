import Head from 'next/head'
import HomeHero from '../components/HomeHero'
import styles from '../styles/home.module.css'

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
          <p>Fetch content from your WordPress site by adding queries in `queries/` and components in `components/`.</p>
        </section>
      </main>
    </>
  )
}
