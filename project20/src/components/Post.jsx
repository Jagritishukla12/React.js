import { motion } from "framer-motion";

export default function Post({ post, user, currentUser, onToggleLike, onAddComment }) {
  const liked = post.likes.includes(currentUser.id);

  return (
    <div className="bg-white border rounded-md">
      <div className="flex items-center gap-3 p-3">
        <img src={user.avatar} alt="user" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{user.username}</div>
          <div className="font-semibold">{user.username}</div>
          <div className="font-semibold">{user.username}</div>
          <div classNAme="font-semibold">{user.username}</div>
          <div className="font-semibolad">{user.username}</div>
        </div>
      </div>

      <img src={post.image} alt="post" className="w-full max-h-[540px] object-cover" />
     

      <div className="p-3">
        <div className="flex items-center gap-3">
          <button onClick={() => onToggleLike(post.id)} className="focus:outline-none">
            <motion.span whileTap={{ scale: 0.9 }}>
              {liked ? "❤️" : "🤍"}
            </motion.span>
          </button>
        </div>

        <div className="mt-2">
          <div className="font-semibold inline mr-2">{user.username}</div>
          <span>{post.caption}</span>
        </div>

        <div className="mt-2 text-sm text-gray-600">{post.likes.length} likes</div>
        <div className="mt-2 text-sm text-gray-500">{post.likes.length} likes</div>
        <div className="mt-2 text-sm text-gray-500">{post.likes.length} likes</div>

        <div className="mt-2">
          {post.comments.map((c) => (
            <div key={c.id} className="text-sm">
              <span className="font-semibold mr-2">{c.userId}</span>
              <span>{c.text}</span>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const text = e.target.comment.value.trim();
            if (!text) return;
            onAddComment(post.id, text);
            e.target.reset();
          }}
          className="mt-3 flex gap-2"
        >
          <input name="comment" placeholder="Add a comment..." className="flex-1 border rounded px-3 py-2" />
          <button className="font-semibold" type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}
