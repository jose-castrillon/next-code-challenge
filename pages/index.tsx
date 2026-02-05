import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Product Catalog</h1>
      <p style={{ marginBottom: '2rem' }}>
        Welcome! Navigate to a product page to see the challenge.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link href="/product/1" style={{ color: 'blue', textDecoration: 'underline' }}>
          Product 1
        </Link>
        <Link href="/product/2" style={{ color: 'blue', textDecoration: 'underline' }}>
          Product 2
        </Link>
        <Link href="/product/3" style={{ color: 'blue', textDecoration: 'underline' }}>
          Product 3
        </Link>
      </div>
    </div>
  );
}
