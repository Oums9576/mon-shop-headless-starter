import { getProducts } from '../lib/shopify';

export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default function Produits({ products }) {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Nos Produits Shopify</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: 30 }}>
            <h2>{product.title}</h2>
            {product.images.edges[0]?.node?.src && (
              <img
                src={product.images.edges[0].node.src}
                alt={product.images.edges[0].node.altText || product.title}
                style={{ maxWidth: 200 }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


