import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import About from "./components/About";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      
      <div className="flex flex-col min-h-screen font-sans">
    
        <header className="flex justify-between items-center px-10 py-5 bg-white shadow">
          <h1 className="font-bold text-xl">Untitled UI</h1>
          <nav className="flex gap-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          </nav>
          <div className="flex gap-3">
            <Link to="/login">
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Sign up</button>
            </Link>
          </div>
        </header>

        
        <main className="flex-1 px-10 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>

        
        <footer className="bg-black text-white px-10 py-12 mt-auto">
          <h3 className="text-2xl font-bold mb-4">
            Let’s get started on something great
          </h3>
          <p className="mb-6">Join over 4,000+ startups already growing with Untitled.</p>
          <div className="flex gap-4 mb-10">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Chat to us</button>
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Get started</button>
          </div>
          <p className="text-sm text-gray-400">
            © 2025 Untitled UI. All rights reserved.
          </p>
          <p> @ 2026 Untitled ui . All Rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
