

import Head from 'next/head'
import styles from '../styles/Privacy.module.css'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy - Versetta</title>
        <meta name="description" content="Versetta Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.content}>
          <p>At Versetta, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.</p>
          {/* Add more privacy policy content here */}
        </div>
      </main>
    </div>
  )
}