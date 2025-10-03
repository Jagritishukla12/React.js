import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Explore({ posts }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Explore</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {posts.map(p => (
          <img
            key={p.id}
            src={p.image}
            className="w-full h-40 object-cover rounded cursor-pointer"
            onClick={() => setSelected(p)}
          />
        ))}
      </div>
      

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <img src={selected.image} className="max-h-full max-w-full" />
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
