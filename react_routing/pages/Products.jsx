import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },

  { id: 2, name: "Phone" },

  { id: 3, name: "Headphones" },
];

export default function Products() {
  return (
    <>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </>
  );
}
