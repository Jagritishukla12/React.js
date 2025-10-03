import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">MyBlog</h2>
            <p className="mt-2 text-sm">
              A place to read Articles, News, Opinions, and Guidance. Stay updated and inspired ✨
            </p>
            <p className="text-sm mt-2">
               A Place to Read Articles, News, Opinions, and Guidance. Stay update and inspired
            </p>
            <p>
              A Place To Read Articles, News , Opinions, and Guidance. Stay update and inspired 
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/articles" className="hover:text-blue-400">Articles</Link></li>
              <li><Link to="/news" className="hover:text-blue-400">News</Link></li>
              <li><Link to="/opinion" className="hover:text-blue-400">Opinions</Link></li>
              <li><Link to="/guidance" className="hover:text-blue-400">Guidance</Link></li>

            </ul>
          </div>
      
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">🌐</a>
              <a href="#" className="hover:text-blue-400">🐦</a>
              <a href="#" className="hover:text-blue-400">📘</a>
              <a href="#" className="hover:text-blue-400">📸</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-400">
          @ { new Date () .getFullYear()} MyBlog. All Rights reserved.
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm text-gray-400">

          @ { new Date () . getFullYear()} MyBlog. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}


export default Footer;
