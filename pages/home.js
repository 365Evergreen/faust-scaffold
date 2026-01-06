import Head from 'next/head'
import HomeHero from '../components/HomeHero'
import LatestPosts from '../components/LatestPosts'
import ServicesList from '../components/ServicesList'
import Features from '../components/Features'
import CTA from '../components/CTA'
import ContactForm from '../components/ContactForm'
import FooterHome from '../components/FooterHome'
import styles from '../styles/home.module.css'
import { getStaticPropsNoRevalidate } from '../wp-templates/getStaticPropsNoRevalidate'
import ExampleQuery from '../queries/ExampleQuery'

export default function Home() {
  return (
    <>
      <Head>
        <title>365 Evergreen</title>
      </Head>
      <main className={styles.container}>
        <HomeHero title="Welcome to the site" subtitle="Built with Faust + Next.js" />
        <section className={styles.content}>
          <LatestPosts />
          <Features />
          <h2 style={{ marginTop: 32 }}>Services</h2>
          <ServicesList />
          <CTA />
          <h2 style={{ marginTop: 32 }}>Contact</h2>
          <ContactForm />
        </section>
      </main>
      <FooterHome />
    </>
  )
}

Home.query = ExampleQuery

export function getStaticProps(ctx) {
  return getStaticPropsNoRevalidate(ctx, {
    Page: Home,
  })
}
