import styles from '../styles/Pricing.module.css'

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <h2>Pricing Plans</h2>
      <div className={styles.plans}>
        <div className={styles.plan}>
          <h3>Creator's Plan</h3>
          <ul>
            <li>All management features</li>
            <li>50GB fast storage</li>
            <li>Analytics and more</li>
          </ul>
        </div>
        <div className={styles.plan}>
          <h3>Pro Plan</h3>
          <ul>
            <li>Everything in Creator's Plan</li>
            <li>Storage features</li>
            <li>Unlimited Team members</li>
            <li>AI analytics features</li>
          </ul>
        </div>
        <div className={styles.plan}>
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
  )
}