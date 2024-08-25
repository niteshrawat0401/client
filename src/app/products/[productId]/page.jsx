import ProductDetails from './ProductDetails';

export default function ProductPage({ params }) {
  return <ProductDetails productId={params.productId} />;
}

export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return products.map((product) => ({
    productId: product.id.toString(),
  }));
}