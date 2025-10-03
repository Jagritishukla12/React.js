import { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

function PostCard({ title, content, category, author, date, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-l-4 border-blue-500 transition-transform duration-300"
      >
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />}
        <div className="p-4">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
            <span className="font-medium text-blue-600">{category}</span>
            <span>{date}</span>
          </div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{content}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-xs text-gray-500 dark:text-gray-400">✍️ {author}</p>
            <button onClick={() => setIsOpen(true)} className="text-blue-500 text-xs font-medium hover:underline">
              Read More →
            </button>
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="max-w-3xl mx-auto mt-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
      >
        {image && <img src={image} alt={title} className="w-full h-64 object-cover" />}
        <div className="p-6">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
            <span className="font-medium text-blue-600">{category}</span>
            <span>{date}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{content}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">✍️ {author}</p>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default PostCard;
