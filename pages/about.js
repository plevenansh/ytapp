import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Versetta - Empowering Content Creation</title>
        <meta name="description" content="Learn about Versetta's mission to democratize content creation with AI-powered tools and analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Versetta</h1>

        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>At Versetta, we're on a mission to democratize content creation. We believe that everyone has a story to tell, and we're here to provide the tools that make that storytelling seamless, efficient, and powerful. Our goal is to empower creators of all levels to focus on what they do best - creating amazing content that inspires, educates, and entertains.</p>
        </section>

        <section className={styles.section}>
          <h2>What Sets Versetta Apart</h2>
          <ul className={styles.featureList}>
            <li>
              <h3>Cutting-Edge AI Integration</h3>
              <p>Our platform harnesses the power of advanced AI to streamline every aspect of the content creation process, from ideation to publication.</p>
            </li>
            <li>
              <h3>Creator-Centric Design</h3>
              <p>Every feature, every button, every workflow in Versetta is designed with creators in mind. We've walked in your shoes, and we've built the tool we wished we had.</p>
            </li>
            <li>
              <h3>Holistic Approach</h3>
              <p>We're not just another editing tool or project management app. Versetta is a comprehensive ecosystem that supports the entire content creation lifecycle.</p>
            </li>
            <li>
              <h3>Community-Driven Innovation</h3>
              <p>We believe in the power of community. Our features are continuously evolving based on feedback and needs of our vibrant creator community.</p>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Our Team</h2>
          <p>Behind Versetta is a diverse team of passionate individuals, each bringing unique expertise to the table. From AI researchers pushing the boundaries of what's possible, to UX designers obsessed with creating intuitive experiences, to former YouTubers who understand the challenges creators face - we're all united by our commitment to empowering creativity.</p>
        </section>

        <section className={styles.section}>
          <h2>Our Vision for the Future</h2>
          <p>We're just getting started. As the content creation landscape evolves, so will Versetta. We envision a future where Versetta becomes the go-to platform for creators worldwide, continuously adapting to new platforms, technologies, and creative trends.</p>
          <p>We're not just building an app; we're nurturing a movement. A movement that believes in the power of individual voices, in the magic of shared stories, and in the potential of technology to amplify human creativity.</p>
        </section>

        <section className={styles.section}>
          <h2>Join Us on This Journey</h2>
          <p>Whether you're a seasoned content creator or just starting out, we invite you to be part of this exciting journey. Together, let's push the boundaries of what's possible in content creation.</p>
        </section>
      </main>
    </div>
  )
}