import { Product } from "../types/app";

interface ProductProps {
  productsData: Product[];
}

const Products = (props: ProductProps) => {
  return (
    <div>
      {props.productsData?.map((product) => (
        <div
          key={product.id}
          style={{
            background: "grey",
            borderRadius: "10px",
            padding: "5px",
            marginTop: "10px",
          }}
        >
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <strong>{product.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default Products;
