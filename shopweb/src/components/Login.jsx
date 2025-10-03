import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Jagriti" && password === "1234") {
      onLogin(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    
    <div
      style={{
        backgroundImage: `url("/5336290.jpg")`, 
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
    
     <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-xl shadow-lg w-[400px] text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
          Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-white/20 placeholder-gray-300 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-white/20 placeholder-gray-300 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
