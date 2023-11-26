import { NavLink, useLoaderData } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
}

export default function ProductsPage() {
  const products = useLoaderData() as Product[];

  return <div>
    {
      products.map(p => {
        return <div key={p.id}>
          <NavLink to={`/products/${p.id}`} > {p.name} </NavLink>
        </div>
      })
    }
  </div>
}
