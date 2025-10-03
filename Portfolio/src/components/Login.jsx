import React, { useState } from "react";
import { motion } from "framer-motion";
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      onLogin();
    } else {
      setError("Invalid username or password!");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-red-500">
      <motion.div 
      animate ={{ y: [ 0, 30,0 ], rotate : [ 0, 20,0]}}
      transition={{ repeat : Infinity, duration: 7 }}
      className="absolute top-20 right-32 w-16 h-16 bg-pink -300 rounded-full opacity-50"
      />
      

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-20 right-32 w-16 h-16 bg-pink-400 rounded-full opacity-80"
      />
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-40 left-40 w-20 h-20 bg-cyan-300 rounded-full opacity-80"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-28 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-80"
      />
      <motion.div 
        animate={{ y: [0,14,2], rotate: [0, 25, 0]}}
        transition={{ repeat: Infinity, duration :7}}
        className ="absolute top-10 left-50  w-16 h-16 bg-pink-500 rounded-full opacity-80"
        />
       <motion.div 
         animate= {{ y: [0, 15, 4], rotate: [ 0,4,42]}}
         transition ={{ repeat: Infinity, duration :8}}
         className=" absolute top- 50 left-50 w-20 h-20 bg-pink-700 rounded-full opacity-100"
         />
         <motion.div 
           animate={{y: [ 0, 18, 5], rotate : [ 0, 6, 90 ]}}
           transition={{ repeat :Infinity, duration:9}}
           className=" absolute  top -30 left-50 w- 30 h-40 bg-pink-800 rounded-full opacity-444"
           />
           <motion.div 
            animate={{y: [0,34,3], rotate: [0,4,39]}}
            transition={{repeat: Infinity, duration :9}}
            className="absolute top-30 left-50 w-30 h-40 bg-pink-800 rounded-full opacity-102"
          />
          <motion.div
            animate={{y: [ 0,20, 2], rotate:[0, 30, 0]}}
            transition={{repeat: Infinity, duration :9}}
            className="absolute top-30 left-50 w-30 h-30 bg-pink-400 rounded-full opacity-112"
            />


      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          {error && <p className="text-red-300 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gray-400 hover:bg-purple-500 text-black font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
