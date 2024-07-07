

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
          Information Collection
                We collect information you provide directly to us, such as when you create an account, subscribe to our service, or communicate with us. We may also collect information automatically when you use our app, including your device information, log data, and usage information.
                Use of Information
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to carry out any other purpose for which the information was collected.
                Information Sharing and Disclosure
                We may share information about you as follows:
                With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf;
                In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process;
                If we believe your actions are inconsistent with the spirit or language of our user agreements or policies, or to protect the rights, property, and safety of our company or others;
                In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company;
                With your consent or at your direction.
                
                Data Security
                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                Data Retention
                We store the information we collect about you for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.
                Your Rights
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information.
                Changes to this Policy
                We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
           
        </div>
      </main>
    </div>
  )
}