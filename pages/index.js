import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Versetta - Empower Your Content Creation</title>
        <meta name="description" content="Streamline your workflow with AI-powered tools and analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <Image src="/logo.png" alt="Versetta Logo" width={150} height={50} />
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Empower Your Content Creation</h1>
          <p className={styles.subtitle}>Streamline your workflow with AI-powered tools and analytics</p>
          <Link href="/signup" className={styles.cta}>Get Started</Link>
        </section>

        <section className={styles.about}>
          <h2>About Versetta</h2>
          <p>At Versetta, we're on a mission to democratize content creation. We believe that everyone has a story to tell, and we're here to provide the tools that make that storytelling seamless, efficient, and powerful. Our goal is to empower creators of all levels to focus on what they do best - creating amazing content that inspires, educates, and entertains.</p>
        </section>

        <section className={styles.features}>
          <h2>What Sets Versetta Apart</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <h3>Cutting-Edge AI Integration</h3>
              <p>Our platform harnesses the power of advanced AI to streamline every aspect of the content creation process, from ideation to publication.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Creator-Centric Design</h3>
              <p>Every feature, every button, every workflow in Versetta is designed with creators in mind. We've walked in your shoes, and we've built the tool we wished we had.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Holistic Approach</h3>
              <p>We're not just another editing tool or project management app. Versetta is a comprehensive ecosystem that supports the entire content creation lifecycle.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Community-Driven Innovation</h3>
              <p>We believe in the power of community. Our features are continuously evolving based on feedback and needs of our vibrant creator community.</p>
            </div>
          </div>
        </section>

        <section className={styles.team}>
          <h2>Our Team</h2>
          <p>Behind Versetta is a diverse team of passionate individuals, each bringing unique expertise to the table. From AI researchers pushing the boundaries of what's possible, to UX designers obsessed with creating intuitive experiences, to former YouTubers who understand the challenges creators face - we're all united by our commitment to empowering creativity.</p>
        </section>

        <section className={styles.vision}>
          <h2>Our Vision for the Future</h2>
          <p>We're just getting started. As the content creation landscape evolves, so will Versetta. We envision a future where Versetta becomes the go-to platform for creators worldwide, continuously adapting to new platforms, technologies, and creative trends.</p>
          <p>We're not just building an app; we're nurturing a movement. A movement that believes in the power of individual voices, in the magic of shared stories, and in the potential of technology to amplify human creativity.</p>
        </section>

        <section className={styles.join}>
          <h2>Join Us on This Journey</h2>
          <p>Whether you're a seasoned content creator or just starting out, we invite you to be part of this exciting journey. Together, let's push the boundaries of what's possible in content creation.</p>
          <Link href="/signup" className={styles.cta}>Join Versetta</Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="Versetta Logo" width={100} height={33} />
          </div>
          <div className={styles.footerLinks}>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cancellation">Cancellation and Refund Policy</Link>
          </div>
          <div className={styles.footerSocial}>
            {/* Add social media icons here */}
          </div>
        </div>
        <div className={styles.footerCopyright}>
          © 2024 Versetta. All rights reserved.
        </div>
      </footer>
    </div>
  );
}