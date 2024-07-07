import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Link href="/terms">Terms and Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/cancellation">Cancellation and Refund Policy</Link>
      </footer>
    </>
  )
}