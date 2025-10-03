export default function Cart({ cart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
            {item.title} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}
