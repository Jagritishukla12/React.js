import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import Singin from "./components/Singin";

const SAMPLE_VIDEOS = [
  {
    id: '1',
    title: 'Big Buck Bunny - Sample Video',
    author: 'Sample Channel',
    views: 125000,
    createdAt: '2024-06-10',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    description: 'This is a sample description for Big Buck Bunny. Use this starter to build your YouTube-like app.'
  },
  {
    id: '2',
    title: 'Sintel Trailer - Sample',
    author: 'OpenMovies',
    views: 98000,
    createdAt: '2024-01-20',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Sintel_poster.jpg',
    description: 'Sintel teaser used as a placeholder video.'
  }
];

const STORAGE_KEY = 'yt_clone_videos_v1';

function loadVideos() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_VIDEOS));
    return SAMPLE_VIDEOS;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_VIDEOS));
    return SAMPLE_VIDEOS;
  }
  
}

function saveVideos(videos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
}
function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function VideoCard({ video }) {
  return (
    <Link to={`/watch/${video.id}`} className="group">
      <div className="relative rounded overflow-hidden bg-gray-200 dark:bg-zinc-800">
        <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover transition-transform group-hover:scale-105" />
        <div className="p-2">
          <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
          <p className="text-xs text-gray-500">{video.author} • {video.views.toLocaleString()} views</p>
        </div>
      </div>
    </Link>
  );
}

function Home({ videos, onLoadMore }) {
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(8);
  const filtered = videos.filter(v => v.title.toLowerCase().includes(query.toLowerCase()) || v.author.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    function onScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setVisible(v => Math.min(v + 4, filtered.length));
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [filtered.length]);

  return (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search videos or channels" className="flex-1 px-3 py-2 rounded border focus:outline-none" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.slice(0, visible).map(v => <VideoCard key={v.id} video={v} />)}
      </div>

      {visible < filtered.length ? (
        <div className="text-center mt-6">
          <button onClick={() => setVisible(visible + 8)} className="px-4 py-2 rounded shadow">Load more</button>
        </div>
      ) : null}
    </div>
  );
}

function Watch({ videos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find(v => v.id === id);
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [comments, setComments] = useState([]);
  const commentRef = useRef();

  useEffect(() => {
    if (!video) {
    
      navigate('/');
      return;
    }
  
    const cmKey = `comments_${video.id}`;
    const raw = localStorage.getItem(cmKey) || '[]';
    try { setComments(JSON.parse(raw)); } catch { setComments([]); }
  }, [id, video, navigate]);

  function postComment() {
    const txt = commentRef.current.value.trim();
    if (!txt) return;
    const newCm = [{ id: Date.now(), author: 'You', text: txt, createdAt: new Date().toISOString() }, ...comments];
    setComments(newCm);
    localStorage.setItem(`comments_${video.id}`, JSON.stringify(newCm));
    commentRef.current.value = '';
  }

  if (!video) return null;

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-black rounded overflow-hidden">
          <video key={video.src} className="w-full h-96" controls>
            <source src={video.src} />
            Your browser does not support the video tag.
          </video>
          <video key ={video.sre} className="w-full h-96" controls >
            <source src ={video.src} />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, optio!
          </video>
        </div>
        <h1 className="mt-3 text-xl font-bold">{video.title}</h1>
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-sm text-gray-500">{video.author} • {video.views.toLocaleString()} views</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setLiked(l => !l)} className={`px-3 py-1 rounded ${liked ? 'bg-blue-600 text-white' : 'border'}`}>{liked ? 'Liked' : 'Like'}</button>
            <button onClick={() => setSubscribed(s => !s)} className={`px-3 py-1 rounded ${subscribed ? 'bg-red-600 text-white' : 'border'}`}>{subscribed ? 'Subscribed' : 'Subscribe'}</button>
        

          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{video.description}</p>

        <div className="mt-6">
          <h3 className="font-semibold">Comments</h3>
          <div className="mt-2">
            <div className="flex gap-2">
              <input ref={commentRef} placeholder="Add a public comment..." className="flex-1 px-3 py-2 rounded border" />
              <button onClick={postComment} className="px-3 py-2 rounded bg-sky-600 text-white">Comment</button>
            </div>

            <div className="mt-4 space-y-3">
              {comments.length === 0 ? <p className="text-sm text-gray-500">No comments yet.</p> : comments.map(c => (
                <div key={c.id} className="p-2 rounded border">
                  <p className="text-sm font-semibold">{c.author} <span className="text-xs text-gray-500">• {new Date(c.createdAt).toLocaleString()}</span></p>
                  <p className="text-sm">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      <aside>
        <h3 className="font-semibold mb-3">Up next</h3>
        <div className="space-y-3">
          {videos.filter(v => v.id !== video.id).map(v => (
            <Link key={v.id} to={`/watch/${v.id}`} className="flex gap-3 items-center">
              <img src={v.thumbnail} alt="thumb" className="w-24 h-14 object-cover rounded" />
              <div>
                <p className="text-sm font-medium">{v.title}</p>
                <p className="text-xs text-gray-500">{v.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}

function UploadModal({ onClose, onUpload }) {
  const [title, setTitle] = useState('');
  const [src, setSrc] = useState('');
  const [author, setAuthor] = useState('You');

  function handleUpload() {
    if (!title || !src) return alert('Please enter title and a public video URL (mp4)');
    const newVideo = {
      id: Date.now().toString(),
      title, author, views: 0, createdAt: new Date().toISOString(), src, thumbnail: 'https://via.placeholder.com/320x180', description: ''
    };
    onUpload(newVideo);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 p-4 rounded w-full max-w-md">
        <h2 className="font-semibold mb-2">Upload Video</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="w-full px-2 py-1 rounded border mb-2" />
        <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Channel name" className="w-full px-2 py-1 rounded border mb-2" />
        <input value={src} onChange={e => setSrc(e.target.value)} placeholder="Public video URL (mp4)" className="w-full px-2 py-1 rounded border mb-2" />
        <input value={src} onChange={e => setSrc(e.target.value) } placeholder="public video UTL (mp5)" className="w-full px-2 py-3 rounded border mb- 3" />
          <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 rounded border">Cancel</button>
          <button onClick={handleUpload} className="px-3 py-1 rounded bg-green-600 text-white">Upload</button>
        </div>
      
      </div>
    
    </div>
  );
}


export default function App() {
  const [videos, setVideos] = useState(() => loadVideos());
  const [showUpload, setShowUpload] = useState(false);
  const [dark, setDark] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    saveVideos(videos);
  }, [videos]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  function handleUpload(newVideo) {
    setVideos(vs => [newVideo, ...vs]);
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
        <nav className="flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 text-white rounded flex items-center justify-center font-bold">YT</div>
              <span className="font-semibold">YouClone</span>
            </Link>

            <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded border">
              <IconMenu />
              <span className="text-sm">Explore</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/upload" className="hidden sm:inline-block px-3 py-1 border rounded" onClick={e => { e.preventDefault(); setShowUpload(true); }}>Upload</Link>
            <button onClick={() => setDark(d => !d)} className="px-2 py-1 border rounded">{dark ? 'Light' : 'Dark'}</button>
            <Link to="/" className="px-2 py-1 rounded border">Sign in</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home videos={videos} />} />
          <Route path="/watch/:id" element={<Watch videos={videos} onUpdate={setVideos} />} />
          <Route path="/upload" element={<div className="p-4">Click Upload in the navbar</div>} />
          <Route path="/Singin" element={<Singin/>} />
        </Routes>

        {showUpload && <UploadModal onClose={() => setShowUpload(false)} onUpload={handleUpload} />}

        <footer className="py-6 text-center text-sm text-gray-500">This is a demo YouTube-like app for learning purposes.</footer>
      </div>
    </BrowserRouter>
  );
}
