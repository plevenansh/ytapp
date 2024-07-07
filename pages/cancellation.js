import Head from 'next/head'
import styles from '../styles/Cancellation.module.css'

export default function Cancellation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cancellation and Refund Policy - Versetta</title>
        <meta name="description" content="Versetta Cancellation and Refund Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cancellation and Refund Policy</h1>
        <div className={styles.content}>
          <ol>
            <li>
              <strong>Subscription Cancellation:</strong> You may cancel your subscription at any time. However, please note that we do not provide refunds for any unused portion of your subscription.
            </li>
            <li>
              <strong>Subscription Period:</strong> Upon cancellation, your subscription will remain active until the end of your current billing period. After this period, your subscription will not renew, and you will lose access to premium features.
            </li>
            <li>
              <strong>No Refunds:</strong> We do not offer refunds for any unused portion of your subscription or for any subscription fees paid in advance.
            </li>
            <li>
              <strong>Cancellation Process:</strong> To cancel your subscription, please log into your account settings and follow the cancellation process. If you encounter any issues, please contact our support team.
            </li>
            <li>
              <strong>Data Retention:</strong> Upon cancellation, we may retain certain data in accordance with legal requirements and our data retention policies.
            </li>
          </ol>
        </div>
      </main>
    </div>
  )
}