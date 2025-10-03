import ProductCard from "../components/ProductCard";

export default function Home({ products, addToCart }) {
  return (
    <div style={styles.container}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

const styles = {
  container: { display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }
};
