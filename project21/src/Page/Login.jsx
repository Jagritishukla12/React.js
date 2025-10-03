export default function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input type="text" placeholder="Email" style={styles.input} />
      <br />
      <input type="password" placeholder="Password" style={styles.input} />
      <br />
      <button style={styles.btn}>Login</button>
    </div>
  );
}

const styles = {
  input: { margin: "10px", padding: "10px", width: "200px" },
  btn: { background: "#333", color: "white", padding: "10px", border: "none", cursor: "pointer" }
};
