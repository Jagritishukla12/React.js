import React from "react";
const LoginPage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="w-[700px] h-[700px] bg-white/10 rounded-full blur-3xl animate-pulse-slow absolute -top-20 -left-20"></div>
        <div className="w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl animate-bounce-slow absolute bottom-10 right-10"></div>
      </div>

    
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-8 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
         Login Page
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
