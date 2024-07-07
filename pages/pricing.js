import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Pricing.module.css'

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pricing - Versetta</title>
        <meta name="description" content="Choose the perfect plan for your content creation needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pricing Plans</h1>

        <div className={styles.plans}>
          <div className={styles.plan}>
            <h2>Creator's Plan</h2>
            <ul>
              <li>All management features</li>
              <li>50GB fast storage</li>
              <li>Analytics and more</li>
            </ul>
            <Link href="/signup" className={styles.button}>Choose Plan</Link>
          </div>

          <div className={styles.plan}>
            <h2>Pro Plan</h2>
            <ul>
              <li>Everything in Creator's Plan</li>
              <li>Storage features</li>
              <li>Unlimited Team members</li>
              <li>AI analytics features</li>
            </ul>
            <Link href="/signup" className={styles.button}>Choose Plan</Link>
          </div>

          <div className={styles.plan}>
            <h2>Studio Plan</h2>
            <ul>
              <li>Everything in Pro Plan</li>
              <li>Full AI and Production features</li>
              <li>On-demand support</li>
              <li>Feature request</li>
              <li>Early access to new features</li>
            </ul>
            <Link href="/signup" className={styles.button}>Choose Plan</Link>
          </div>
        </div>
      </main>
    </div>
  )
}