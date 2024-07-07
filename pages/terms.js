import Head from 'next/head'
import styles from '../styles/Terms.module.css'

export default function Terms() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terms and Conditions - Versetta</title>
        <meta name="description" content="Versetta Terms and Conditions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <div className={styles.content}>
          <p>Welcome to Versetta. By using our services, you agree to these terms. Please read them carefully.</p>
          {/* Add more terms and conditions content here */}
        </div>
      </main>
    </div>
  )
}