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
          Acceptance of Terms
By accessing and using our content creator app, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
Use License
Permission is granted to temporarily download one copy of the app for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
a. modify or copy the materials;
b. use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
c. attempt to decompile or reverse engineer any software contained in the app;
d. remove any copyright or other proprietary notations from the materials; or
e. transfer the materials to another person or "mirror" the materials on any other server.
Disclaimer
The materials on our app are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
Limitations
In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our app, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
Accuracy of Materials
The materials appearing on our app could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our app are accurate, complete or current. We may make changes to the materials contained on our app at any time without notice.
Links
We have not reviewed all of the sites linked to our app and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
Modifications
We may revise these terms of service for our app at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service.
Governing Law
These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
           </div>
      </main>
    </div>
  )
}