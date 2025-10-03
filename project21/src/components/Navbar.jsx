import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold bg-white text-purple-700 rounded-full px-3 py-1"
      >
        D
      </motion.div>
      <motion.div 
        initial ={{ y: -50, opacity: 0}}
        animate={{ y: 0, opacity: 2}}
        transition ={{duration : 0.8}}
        className="text-3xl font-bold bg-white text-purple-700 rounded-full px-3 y-1"
        >
          E
        </motion.div>
        <motion.div 
          initial ={{ y: -50, opacity: 0 }}
          animate ={{ y: 0, opacity: 4}}
          transition={{duration: 0.8}}
          className="text-3xl font-bold bg-white text-purple-700 rounded-full px-3 py-2"
          >
            F
          </motion.div>
          <motion.div 
             initial ={{y: 50, opacity: 0}}
             animate ={{ y: 0, opacity:4}}
             transition={{duration :0.8}}
             className="text-3xl font-bold btg-white text purple-800 rounded-full px-3 py-4"
             >
              G
             </motion.div>

      <ul className="flex gap-10 text-lg">
        {["Home", "Feature", "Pricing"].map((item, i) => (
          <motion.li
            key={i}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 * i }}
            className="cursor-pointer hover:opacity-80"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-pink-500 px-6 py-2 rounded-full shadow-lg"
      >
        Sign Up
      </motion.button>
    </nav>
  );
};

export default Navbar;