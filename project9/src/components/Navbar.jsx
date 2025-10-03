import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="text-2xl font-bold text-blue-400">
            MyBlog
          </Link>

        
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/articles" className="hover:text-blue-400 transition">Articles</Link>
            <Link to="/news" className="hover:text-blue-400 transition">News</Link>
            <Link to="/opinion" className="hover:text-blue-400 transition">Opinions</Link>
            <Link to="/guidance" className="hover:text-blue-400 transition">Guidance</Link>
          </div>

          
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            to="/articles"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-blue-400 transition"
          >
            Articles
          </Link>
          <Link
            to="/news"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-blue-400 transition"
          >
            News
          </Link>
          <Link
            to="/opinion"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-blue-400 transition"
          >
            Opinions
          </Link>
          <Link
            to="/guidance"
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-blue-400 transition"
          >
            Guidance
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
