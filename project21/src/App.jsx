import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-cyan-400 text-white relative overflow-hidden">
    
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-20 right-32 w-16 h-16 bg-pink-400 rounded-full opacity-80"
      />
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-40 left-40 w-20 h-20 bg-cyan-300 rounded-full opacity-80"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-28 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-80"
      />
      <motion.div 
        animate={{ y: [0,14,2], rotate: [0, 25, 0]}}
        transition={{ repeat: Infinity, duration :7}}
        className ="absolute top-10 left-50  w-16 h-16 bg-pink-500 rounded-full opacity-80"
        />
       <motion.div 
         animate= {{ y: [0, 15, 4], rotate: [ 0,4,42]}}
         transition ={{ repeat: Infinity, duration :8}}
         className=" absolute top- 50 left-50 w-20 h-20 bg-pink-700 rounded-full opacity-100"
         />

    
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="text-3xl font-bold bg-white text-purple-700 rounded-full px-3 py-1">D</div>
        <ul className="flex gap-10 text-lg">
          <li className="cursor-pointer hover:opacity-80">Home</li>
          <li className="cursor-pointer hover:opacity-80">Feature</li>
          <li className="cursor-pointer hover:opacity-80">Pricing</li>
        </ul>
        <button className="bg-pink-500 px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">
          Sign Up
        </button>
      </nav>

    
      <div className="flex flex-col md:flex-row items-center justify-between px-12 py-20">
        
        <div className="max-w-lg">
          <h1 className="text-6xl font-extrabold leading-snug">
            Smart Banking <br />
            <span className="text-yellow-300">for freelancers</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Draft is a revolutionary mobile app built to help you manage your
            business easily and save your money.
          </p>
          <button className="mt-8 bg-blue-900 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Register Now
          </button>
        </div>

        
        <div className="mt-16 md:mt-0">
          <div className="w-80 h-[520px] bg-white text-black rounded-3xl p-6 shadow-2xl">
            <h2 className="font-bold text-lg mb-4">Credit Cards</h2>

      
            <div className="bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-xl p-4 mb-4">
              1234 56•• •••• 7890 <br /> John Cooper
            </div>

            
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-xl p-4 mb-6">
              4321 •••• •••• 9876 <br /> Jane Cooper
            </div>

          
            <h3 className="font-semibold mb-2">Send Money To</h3>
            <div className="flex gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
              <div className="w-12 h-12 bg-red-400 rounded-full"></div>
              <div className="w-12 h-12 bg-green-400 rounded-full"></div>
              <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
              <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
            </div>

          
            <h3 className="font-semibold mb-2">Overview</h3>
            <div className="flex justify-between text-lg font-bold">
              <span className="text-red-500">-59$</span>
              <span className="text-green-500">+18$</span>
              <span className="text-green-500">+10$</span>
              <span className="text-red-500">-29$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;