import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 min-h-screen text-white">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Gallery />
          <Contact />
          <Footer />
          
          <div className="fixed bottom-5 right-5">
            <button
              onClick={handleLogout}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_#a855f7]"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
