import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const projects = [
  {
    title: "E-Commerce Website",

    description:
      "A modern full-stack e-commerce web app with React, Tailwind, and Node.js.",
    image:
      "https://img.freepik.com/free-vector/ecommerce-illustration_1284-6461.jpg",
    github: "https://github.com",
    demo: "https://code.visualstudio.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with smooth animations and responsive design.",
    image:
      "https://img.freepik.com/free-vector/web-developer-design_23-2148819604.jpg",
    github: "https://github.com",
    demo: "https://code.visualstudio.com/",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with Socket.io and MongoDB, featuring dark mode UI.",
    image:
      "https://img.freepik.com/free-vector/chatbot-concept-illustration_114360-5522.jpg",
    github: "https://github.com",
    demo: "https://code.visualstudio.com/",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      
      <motion.h2
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 text-center mb-14"
        variants={fadeUp}
      >
        My Projects
      </motion.h2>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/10 overflow-hidden hover:shadow-purple-500/30 transition-all duration-500"
          >
            
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
              />
            </div>

          
            <div className="p-6 space-y-3 text-center">
              <h3 className="text-2xl font-bold text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>

              
              <div className="flex justify-center gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
