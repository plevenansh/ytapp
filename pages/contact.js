import Head from 'next/head'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us - Versetta</title>
        <meta name="description" content="Get in touch with the Versetta team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <p>You can send us a message or ask a general question about Versetta</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>

        <p>Or email us directly at: versatter@gmail.com</p>
      </main>
    </div>
  )
}