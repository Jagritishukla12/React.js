import { motion } from "framer-motion";

function PostCard({ title, content, category, author, date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-indigo-500">{category}</span>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="text-sm text-gray-500">By {author}</div>
    </motion.div>
  );
}

export default PostCard;
