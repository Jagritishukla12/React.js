// src/components/VideoFeed.jsx
import React from "react";
import VideoCard from "./VideoCard";

const dummyVideos = [
  { id: 1, title: "React Tutorial", channel: "CodeWithMe", thumbnail: "https://via.placeholder.com/300" },
  { id: 2, title: "JavaScript Basics", channel: "JS Mastery", thumbnail: "https://via.placeholder.com/300" }
];

export default function VideoFeed() {
  return (
    <div className="flex flex-wrap">
      {dummyVideos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
