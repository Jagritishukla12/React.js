import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-900 text-white p-4 min-h-screen">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="space-y-3">
        <li><Link to="/" className="hover:text-red-500">Home</Link></li>
        <li><Link to="/search/react" className="hover:text-red-500">React</Link></li>
        <li><Link to="/search/javascript" className="hover:text-red-500">JavaScript</Link></li>
        <li><Link to="/search/css" className="hover:text-red-500">CSS</Link></li>
      </ul>
    </div>
  );
};
export default Sidebar;
