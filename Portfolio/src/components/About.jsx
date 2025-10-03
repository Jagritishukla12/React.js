import { motion } from "framer-motion";


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

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};


const skills = [
  { name: "React JS", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "HTML / CSS", level: "95%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "Framer Motion", level: "70%" },
  {name: "React-Native", level: "60%"},
];

function About() {
  return (
    <motion.section
      id="about"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      
      
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0"
        variants={zoomIn}
      >
        
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL1_kQBOKYt0PB4kACiva19lb27kbidtGUQ&s"
          alt="Portfolio"
          className="rounded-2xl shadow-2xl w-[80%] lg:w-[70%] hover:scale-105 transition-transform duration-500"
        />
      
      </motion.div>
 <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        variants={fadeUp}
       >
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          variants={fadeUp}
        >
          Hi, I’m <span className="font-semibold text-purple-400">[Jagriti shukla]</span>, 
          a passionate <span className="text-pink-400">Web Developer</span> and 
          creative problem solver. I love building modern, responsive, 
          and user-friendly websites using the latest technologies like 
          <span className="font-semibold text-purple-300"> React, Tailwind CSS,</span> 
          and <span className="font-semibold text-purple-300">Framer Motion</span>.
        </motion.p>

        <motion.p
          className="text-lg text-gray-400"
          variants={fadeUp}
        >
          My goal is to craft digital experiences that not only look great 
          but also provide real value. I enjoy blending creativity with 
          functionality to bring ideas to life and deliver meaningful solutions.
        </motion.p>

      
        <motion.div className="space-y-4 pt-6" variants={fadeUp}>
          <h3 className="text-2xl font-bold text-pink-400">My Skills</h3>
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.button
          className="px-8 py-3 mt-6 rounded-2xl bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold"
          variants={fadeUp}
        >
          View My Work
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default About;
