import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ users, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full mb-2 border p-2 rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full mb-2 border p-2 rounded" />
      <button className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
      <div className="mt-3 text-sm">
        No account? <Link to="/signup">Signup</Link>
      </div>
    </form>
  );
}
