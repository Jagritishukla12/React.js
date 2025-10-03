import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return alert("Enter email & password");
    
    localStorage.setItem("yt_clone_user", JSON.stringify({ email }));
    alert("Sign In Successful!");
    navigate("/"); 
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-900">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-3 py-2 rounded border focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setFullName(e.target.value)}
            className="px-3 py-2 rounded border focus:outline-none"
          />
          <input 
           type="password"
           placeholder="password" 
           value={password}
           onChange={e => setName (e.target.value)}
           className="px-3 py-2 rounded border focus:outline-none"
           />
      
          <button
            type="submit"
            className="px-3 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-3 text-center">
          Demo login, any email/password works
        </p>
      </div>
    </div>
  );
}
