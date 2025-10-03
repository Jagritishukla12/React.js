
import React from "react";
import { Link } from "react-router-dom";

const videos = [
  { id: "1", title: "React Tutorial", thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg" },
  { id: "2", title: "Node.js Crash Course", thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg" },
  { id: "3", title: "Tailwind CSS Guide", thumbnail: "https://img.youtube.com/vi/dFgzHOX84xQ/hqdefault.jpg" },
];

function Home() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Link to={`/watch/${video.id}`} key={video.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={video.thumbnail} alt={video.title} className="w-full" />
          <div className="p-3">
            <h2 className="font-bold">{video.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
