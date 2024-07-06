import Head from 'next/head'


export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '0 0.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Head>
        <title>Empower Your Content Creation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{
        padding: '5rem 0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          margin: 0,
          lineHeight: 1.15,
          fontSize: '4rem',
          textAlign: 'center'
        }}>Empower Your Content Creation</h1>
        <p style={{
          textAlign: 'center',
          lineHeight: 1.5,
          fontSize: '1.5rem'
        }}>Streamline your workflow with AI-powered tools and analytics</p>
        <button style={{
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>Get Started</button>

        <section>
          <h2>About Versetta</h2>
          <p>At Versetta, we're on a mission to democratize content creation. We believe that everyone has a story to tell, and we're here to provide the tools that make that storytelling seamless, efficient, and powerful. Our goal is to empower creators of all levels to focus on what they do best - creating amazing content that inspires, educates, and entertains.</p>
          
          <h3>What Sets Versetta Apart</h3>
          <ul>
            <li>Cutting-Edge AI Integration: Our platform harnesses the power of advanced AI to streamline every aspect of the content creation process.</li>
            <li>Creator-Centric Design: Every feature is designed with creators in mind, built from our own experience in the field.</li>
            <li>Holistic Approach: Versetta is a comprehensive ecosystem supporting the entire content creation lifecycle.</li>
            <li>Community-Driven Innovation: Our features evolve based on feedback from our vibrant creator community.</li>
          </ul>
        </section>

        <section>
          <h2>Pricing Plans</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%'
          }}>
            <div>
              <h3>Creator's Plan</h3>
              <ul>
                <li>All management features</li>
                <li>50GB fast storage</li>
                <li>Analytics and more</li>
              </ul>
            </div>
            <div>
              <h3>Pro Plan</h3>
              <ul>
                <li>Everything in Creator's Plan</li>
                <li>Storage features</li>
                <li>Unlimited Team members</li>
                <li>AI analytics features</li>
              </ul>
            </div>
            <div>
              <h3>Studio Plan</h3>
              <ul>
                <li>Everything in Pro Plan</li>
                <li>Full AI and Production features</li>
                <li>On-demand support</li>
                <li>Feature request</li>
                <li>Early access to new features</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>You can send us a message or ask a general question about Versetta</p>
          <p>Email: versatter@gmail.com</p>
        </section>
      </main>

      <footer style={{
        width: '100%',
        height: '100px',
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <a href="/terms" style={{margin: '0 10px'}}>Terms and Conditions</a>
        <a href="/privacy" style={{margin: '0 10px'}}>Privacy Policy</a>
        <a href="/cancellation" style={{margin: '0 10px'}}>Cancellation and Refund Policy</a>
      </footer>
    </div>
  );
}