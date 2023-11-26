import { useLoaderData } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
  email: string;
}

export default function ProductPage() {
  const product = useLoaderData() as Product;


  return <div>
    <h1>{product.id}</h1>
    <h1>{product.name}</h1>
    <h1>{product.email}</h1>
  </div>
}
