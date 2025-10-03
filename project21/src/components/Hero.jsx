export default function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)} style={styles.btn}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: { border: "1px solid #ddd", borderRadius: "5px", padding: "15px", width: "220px", textAlign: "center" },
  btn: { background: "#333", color: "white", padding: "10px", border: "none", cursor: "pointer" },
  card:{ border:"1px solid #ddd", borderRadius:"5px", padding:"15px", width:"220px", textAlign : "center"},
  btn: { background: "#333", color:"white", padding: "10px", border:"none", cursor:"pointer", textAlign:"center"},


};
