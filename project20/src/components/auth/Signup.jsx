import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ setUsers, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    if (!username || !password) return;
    const newUser = { id: "u" + Math.random().toString(36).slice(2,7), username, password, name, avatar: "https://i.pravatar.cc/150?u=" + username, followers: [], following: [] };
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    navigate("/");
  }

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="w-full mb-2 border p-2 rounded" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full mb-2 border p-2 rounded" />
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="w-full mb-2 border p-2 rounded" />
      <button className="bg-blue-600 text-white w-full py-2 rounded">Signup</button>
    </form>
  );
}
