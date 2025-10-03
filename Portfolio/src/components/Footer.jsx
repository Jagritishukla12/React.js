import React from "react";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black/30 text-gray-300 py-8 border-t border-purple-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">MyPortfolio</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
        </div>

        
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        
        
        <div className="flex gap-5">
          <a href="mailto:example@email.com" target="_blank" rel="noreferrer">
            <Mail className="w-5 h-5 hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-purple-400 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="w-5 h-5 hover:text-purple-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-5 h-5 hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
