import { Link } from "react-router-dom";

export default function Header({ currentUser, onLogout, users }) {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-20">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-3">
        
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold tracking-tight font-sans">
            Instagram
          </h1>
        </Link>

      
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:opacity-70">Home</Link>
          <Link to="/explore" className="hover:opacity-70">Explore</Link>
          <Link to={`/profile/${currentUser.username}`}>
            <img
              src={currentUser.avatar}
              alt="me"
              className="w-8 h-8 rounded-full border"
            />
          </Link>
          <button
            onClick={onLogout}
            className="text-sm px-2 py-1 border rounded"
          >
            Logout
          </button>
          <button 
         onClick = { onLogin}
         className ="text-sm px-2 py-1 border rounded"
         >
          Login
         </button>

        </nav>
      </div>
    </header>
  );
  
}
