import React, { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <Router>
      <div className="relative min-h-screen text-white">
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://videocdn.cdnpk.net/videos/9c87e952-a218-5286-9f9f-2fc8797efd65/horizontal/previews/clear/small.mp4?token=exp=1757593608~hmac=48bc251c61717ede4a024cc881de57392a2448e5501a187843de3ae9dc7ee7c6"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 -z-5"></div>
        <nav className="w-full bg-white/20 backdrop-blur-xl border border-white/20 text-white px-8 py-4 flex justify-between items-center shadow-lg relative z-10 rounded-b-2xl">
          <h1 className="text-2xl font-extrabold drop-shadow-lg tracking-wide">
            Adarsh Photocopy
          </h1>
          <div className="space-x-6">
        
            <Link
              className="hover:bg-white/30 px-3 py-2 rounded-lg transition backdrop-blur-sm shadow-sm"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:bg-white/30 px-3 py-2 rounded-lg transition backdrop-blur-sm shadow-sm"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:bg-white/30 px-3 py-2 rounded-lg transition backdrop-blur-sm shadow-sm"
              to="/contact"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="hover:bg-white/30 px-3 py-2 rounded-lg transition backdrop-blur-sm shadow-sm"
            >
              Logout
            </button>
          </div>
        </nav>
        <div className="p-6 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
         <footer className="bg-white/20 backdrop-blur-xl border-t border-white/20 text-white z-10">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-xl font-bold">Adarsh Photocopy</h2>
              <p className="text-sm mt-2">
                Fast & Reliable Printing, Photocopy and Online Form Services.
              </p>
            </div>
              <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li>Sonu Mishra</li>
                <li>
                  📍 Raipur Karuchiliya (Near by Union bank of India), India
                </li>
                <li>📞 +91 9340562625</li>
                <li>✉️ smsonumishra9@gmail.com</li>
              </ul>
            </div>
          </div>
           <div className="bg-black/30 py-3 text-center text-xs border-t border-white/10">
            © {new Date().getFullYear()} Adarsh Photocopy. All Rights Reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
