
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-black shadow-md">
      <Link to="/" className="text-xl font-bold text-red-500">
        MyTube
      </Link>
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-1 rounded-lg text-black w-1/2"
      />
      <div className="flex gap-4">
        <button className="px-3 py-1 bg-red-500 rounded-lg">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
