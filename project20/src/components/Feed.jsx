import StoryBar from "./StoryBar";
import Post from "./Post";

export default function Feed({ posts, users, currentUser, setPosts }) {
  function toggleLike(postId) {
    setPosts(prev =>
      prev.map(p => {
        if (p.id !== postId) return p;
        const liked = p.likes.includes(currentUser.id);
        return {
          ...p,
          likes: liked
            ? p.likes.filter(id => id !== currentUser.id)
            : [...p.likes, currentUser.id],
        };
      })
    );
  }

  function addComment(postId, text) {
    setPosts(prev =>
      prev.map(p => {
        if (p.id !== postId) return p;
        const c = { id: Math.random().toString(36).slice(2, 9), userId: currentUser.username, text };
        return { ...p, comments: [...p.comments, c] };
      })
    );
  }
  

  function findUser(id) {
    return users.find(u => u.id === id) || currentUser;
  }

  return (
    <div className="flex flex-col gap-4">
      <StoryBar users={users} />
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          user={findUser(post.userId)}
          currentUser={currentUser}
          onToggleLike={toggleLike}
          onAddComment={addComment}
        />
      ))}
      
    </div>
  );
}
