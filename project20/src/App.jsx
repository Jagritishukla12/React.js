import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initialUsers, initialPosts } from "./data/dummyData";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import NewPostForm from "./components/NewPostForm";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

export default function App() {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || initialUsers);
  const [posts, setPosts] = useState(() => JSON.parse(localStorage.getItem("posts")) || initialPosts);
  const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem("currentUser")) || null);

  useEffect(() => { localStorage.setItem("users", JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem("posts", JSON.stringify(posts)); }, [posts]);
  useEffect(() => { localStorage.setItem("currentUser", JSON.stringify(currentUser)); }, [currentUser]);

  function createPost({ image, caption }) {
    const newPost = { id: "p"+Math.random().toString(36).slice(2,7), userId: currentUser.id, image, caption, likes: [], comments: [] };
    setPosts(prev => [newPost, ...prev]);
  }

  function logout() { setCurrentUser(null); }

  return (
    <Router>
      {currentUser ? (
        <div className="min-h-screen bg-gray-100">
          <Header currentUser={currentUser} onLogout={logout} />
          <main className="max-w-2xl mx-auto mt-6 p-3 flex flex-col gap-6">
            <Routes> 
              <Route path="/" element={
                <>
                  <NewPostForm onCreate={createPost} />
                  <Feed posts={posts} users={users} currentUser={currentUser} setPosts={setPosts} />
                </>
              } />
              <Route path="/explore" element={<Explore posts={posts} />} />
              <Route path="/profile/:username" element={<Profile users={users} posts={posts} currentUser={currentUser} />} />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<Signup setUsers={setUsers} setCurrentUser={setCurrentUser} />} />
          <Route path="*" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
        </Routes>
      )}
    </Router>
  );
}
