import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-3 py-16 border-t border-purple-400 
                 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      }}
      id="contact"
      data-scroll
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">
       <div className="flex flex-col justify-center space-y-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            I’d love to hear from you! Whether you have a project in mind, want
            to collaborate, or just say hello — drop me a message.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-pink-400" /> jagritishukla1205@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-pink-400" /> +91 9713583396
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-pink-400" /> Rewa, India
            </p>
          </div>
          


        
<div className="flex gap-6 pt-4">
  <a href="https://www.linkedin.com/in/jagriti-shukla-3289b8352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:scale-110 transition">
    <Linkedin className="w-6 h-6 text-blue-400" />
  </a>
  <a href="https://github.com" className="hover:scale-110 transition">
    <Github className="w-6 h-6 text-gray-300" />
  </a>
  <a href="https://instagram.com" className="hover:scale-110 transition">
    <Instagram className="w-6 h-6 text-pink-400" />
  </a>
</div>

        </div>

        
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                       focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                       focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                       focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold 
                       hover:opacity-90 shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
