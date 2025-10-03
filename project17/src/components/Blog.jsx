import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BLOG_COUNT = 12;

export default function BlogPage() {
  const [open, setOpen] = useState(false);

  const blogs = Array.from({ length: BLOG_COUNT }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    author: `Author ${i + 1}`,
    date: `Sept ${i + 1}, 2025`,
    excerpt: `This is a short summary of blog post ${i + 1}. It gives a quick idea of the content.`,
    content: `This is the full content of blog post ${i + 1}. Here you can write detailed content, images, code snippets, or anything related to the blog.`,
  }));

  function toggleOpen() {
    setOpen((v) => !v);
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 p-6">
      <div className="w-full max-w-5xl">
        
        <motion.div
          layout
          initial={{ borderRadius: 16 }}
          className="bg-white rounded-2xl shadow-md p-6 cursor-pointer mb-8"
          onClick={toggleOpen}
        >
          <h2 className="text-2xl font-bold mb-2">Featured Blog</h2>
          <p className="text-gray-500 mb-4">
            Click to {open ? "collapse" : "expand"} and read all blog posts
          </p>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </motion.div>

          
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-6 overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {blogs.map((blog, idx) => (
                    <motion.div
                      key={blog.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="bg-white border rounded-xl p-4 shadow-sm"
                    >
                      <h3 className="font-medium text-lg">{blog.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        By {blog.author} • {blog.date}
                      </p>
                      <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1 rounded-md text-sm border bg-gray-100">
                          Read More
                        </button>
                        <button className="px-3 py-1 rounded-md text-sm border bg-gray-100">
                          Share
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-md bg-gray-100 border"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="text-xs text-gray-400 mt-3">
          Tip: customize <code>BLOG_COUNT</code> to show more or fewer blog posts.
        </p>
      </div>
    </div>
  );
}
