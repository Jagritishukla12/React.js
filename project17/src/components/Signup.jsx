import React from "react";

function Signup() {
  return (
    
    <div className="flex justify-center items-center h-[70vh]">
      
      <div className="w-96 shadow-lg p-8 rounded bg-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center ">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className=" px-4 py-2 rounded"
          />
         
          <input
            type="email"
            placeholder="Email/Phone Number"
            className="border px-4 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded"
          />
          
      <button className="bg-black text-white py-2 rounded">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
