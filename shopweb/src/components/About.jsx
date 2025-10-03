import React from "react";
import { motion } from "framer-motion";

function About() {
  
  return (
    
    <div className="text-white px-4 sm:px-8 py-12">
  
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Welcome to <span className="text-blue-400 font-semibold">Adarsh Photocopy</span> – your one-stop online solution for all photocopy, printing, lamination, and government ID services. We make it easy for you to get high-quality prints, official document services, and other related tasks without stepping out of your home.
      </motion.p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <motion.div
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Mission</h2>
          <p className="text-gray-300 text-sm md:text-base">
            To provide convenient, fast, and reliable online photocopy and printing services to individuals and businesses, ensuring quality and efficiency in every order.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Our Vision</h2>
          <p className="text-gray-300 text-sm md:text-base">
            To be the leading online photocopy and printing service provider, trusted by customers for quality, reliability, and exceptional service.
          </p>
        </motion.div>
      </div>

      
      <motion.div
        className="mt-12 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-2">
          <li>High-quality printing and photocopy services</li>
          <li>Convenient online ordering and doorstep delivery</li>
          <li>Expert handling of government ID services</li>
          <li>Affordable pricing with special offers</li>
          <li>Fast, reliable, and friendly customer support</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default About;
