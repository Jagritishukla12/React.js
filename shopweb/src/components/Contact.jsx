import React from 'react'

function Contact() {
  return (
    <div>
      <div
        id="contact"
        data-scroll
        className="min-h-screen flex flex-col items-center justify-center px-3 py-10 border-t border-gray-800 
                   bg-transparent" 
      >
        <form className="w-full max-w-xl space-y-6 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">
          <div>
             <h2 className="text-5xl font-bold mb-8 uppercase text-white-800  drop-shadow-lg">
          Contact Us
        </h2>
        <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 
                         transition duration-300 hover:shadow-gray-400/40 focus:shadow-gray-400/60"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 
                         transition duration-300 hover:shadow-gray-400/40 focus:shadow-gray-400/60"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                         focus:outline-none focus:ring-2 focus:ring-gray-400 
                         transition duration-300 hover:shadow-gray-400/40 focus:shadow-gray-400/60"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-black font-semibold 
                       hover:bg-gray-300 shadow-lg hover:shadow-gray-500/70 
                       transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;

