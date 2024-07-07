import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Versetta - Empower Your Content Creation</title>
        <meta name="description" content="Streamline your workflow with AI-powered tools and analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Empower Your Content Creation</h1>
        <p>Streamline your workflow with AI-powered tools and analytics</p>
        <button>Get Started</button>

        <section>
          <h2>About Versetta</h2>
          <p>At Versetta, we're on a mission to democratize content creation...</p>
          {/* Add more content here */}
        </section>

        {/* Add more sections as needed */}
      </main>

      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  )
}