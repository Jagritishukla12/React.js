import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.id.videoId}`} className="w-72 m-3 bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-full h-40 object-cover" />
      <div className="p-2">
        <h3 className="text-white text-sm font-semibold truncate">{video.snippet.title}</h3>
        <p className="text-gray-400 text-xs">{video.snippet.channelTitle}</p>
      </div>
    </Link>
  );
};
export default VideoCard;
