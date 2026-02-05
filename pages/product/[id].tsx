import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from '../../types';

// SECURITY LEAK: Hardcoded API secret key (DO NOT DO THIS IN PRODUCTION!)
const API_SECRET_KEY = "sk_prod_12345_do_not_share";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // ANTI-PATTERN: Storing entire large JSON response in state
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // ANTI-PATTERN: Client-Side Rendering with useEffect + fetch
  useEffect(() => {
    if (!id) return;

    // ANTI-PATTERN: Fetching directly from client, exposing API key
    fetch(`https://dummyjson.com/products/${id}`, {
      headers: {
        'Authorization': `Bearer ${API_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // ANTI-PATTERN: Saving entire response object (with all fields)
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  // ANTI-PATTERN: Poor UX - returning null causes layout shift
  if (loading || !product) {
    return null;
  }

  // ANTI-PATTERN: Logic in View - calculating price with tax in JSX
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{product.title}</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>{product.description}</p>
      
      <div style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Price: ${product.price}
        </p>
        <p style={{ fontSize: '1.2rem', color: '#888' }}>
          Price with tax (20%): ${(product.price * 1.2).toFixed(2)}
        </p>
        <p>Rating: {product.rating} / 5</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
      </div>

      {product.images && product.images.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <img 
            src={product.images[0]} 
            alt={product.title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
}
