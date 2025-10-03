import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Profile({ users, setUsers, posts, setPosts, currentUser }) {
  const { username } = useParams();

  const userIndex = users.findIndex(u => u.username === username);
  const user = users[userIndex] || currentUser;
  const userPosts = posts.filter(p => p.userId === user.id);
  const isCurrentUser = user.id === currentUser.id;

  
  const [editing, setEditing] = useState(false);
  const [editUsername, setEditUsername] = useState("");
  const [editName, setEditName] = useState("");

  const [newPostImage, setNewPostImage] = useState("");

  
  useEffect(() => {
    if (editing) {
      setEditUsername(user.username);
      setEditName(user.name);
    }
  }, [editing, user.username, user.name]);

  const handleEditSave = () => {
    const updatedUsers = users.map(u =>
      u.id === currentUser.id ? { ...u, username: editUsername, name: editName } : u
    );
    setUsers(updatedUsers);
    setEditing(false);
  };

  const handleFollow = () => {
    if (!isCurrentUser) {
      const updatedUsers = users.map(u => {
        if (u.id === user.id) {
          const followers = u.followers || [];
          if (!followers.includes(currentUser.id)) followers.push(currentUser.id);
          return { ...u, followers };
        }
        if (u.id === currentUser.id) {
          const following = u.following || [];
          if (!following.includes(user.id)) following.push(user.id);
          return { ...u, following };
        }
        return u;
      });
      setUsers(updatedUsers);
    }
  };

  const handleAddPost = () => {
    if (!newPostImage) return;
    const newPost = {
      id: Date.now().toString(),
      userId: currentUser.id,
      image: newPostImage,
      likes: 0,
    };
    setPosts([newPost, ...posts]);
    setNewPostImage("");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8">
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
        />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            {editing ? (
              <>
                <input
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  className="border px-2 py-1 rounded"
                />
                <input 
                   value ={ editUsername}
                  onChange={(e) => setEditUsername (e.target.value)}
                  className="border px-2 py-1 rounded"
                  />
                  <input 
                        value = {editUsername}
                        onChange={(e) =>setEditUsername (e. target.value)}
                        className="border px-2 py-1 rounded"
                  />
                  <input 
                    value = {editUsername}
                    onChange = { (e)  => setEditUsername (e. target.value)}
                    className="border px-2 py-1 rounded"
                    />
                    <input 
                      value = {editUsername}
                      onChange = { (e) => setEditUsername (e. target.value)}
                      className="border px-2 py-1 rounded"
                      />
                    <input 
                     value ={ editUsername}
                     onChange = { (e) => setEditUsername (e.target.value)}
                     className="border px-2 py-1 rounded"
                     />
                     <input 
                      value ={ editUsername}
                      onChange={ (e) => setEditUsername (e.target.value)}
                      className="border px-2 py-1 rounded"
                      />
                      <input 

                        value ={ editUsername (e.target.value)}
                        onChange = {(e) => setEditUsername (e.target.value)}
                        className ="border px-2 py-1 rounded"
                        />

                <button
                  onClick={handleEditSave}
                className="px-4 py-1 bg-green-500 text-white rounded text-sm font-medium"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold">{user.username}</h2>
                {isCurrentUser ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="px-4 py-1 border rounded text-sm font-medium hover:bg-gray-100"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={handleFollow}
                    className="px-4 py-1 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600"
                  >
                    Follow
                  </button>
                )}
              </>
            )}
          </div>
          <div className="flex gap-6 mb-2 text-sm">
            <span><b>{userPosts.length}</b> posts</span>
            <span><b>{user.followers?.length || 0}</b> followers</span>
            <span><b>{user.following?.length || 0}</b> following</span>
          </div>
          <div className="text-sm text-gray-700">{user.name}</div>
        </div>
      </div>


      {isCurrentUser && (
        <div className="mb-6 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Image URL for new post"
            value={newPostImage}
            onChange={(e) => setNewPostImage(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />
          <button
            onClick={handleAddPost}
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Post
          </button>
        </div>
      )}

      
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {userPosts.map((p) => (
          <div key={p.id} className="relative group">
            <img
              src={p.image}
              alt="post"
              className="w-full h-32 object-cover rounded cursor-pointer"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-sm transition">
              {p.likes || 0} ❤️
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
