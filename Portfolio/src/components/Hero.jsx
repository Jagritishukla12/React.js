import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import ComputerModel from "./ComputerModel";
import { TypeAnimation } from "react-type-animation";

const fadeLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } };

function Hero() {
  return (
    
    <section className="relative h-screen flex flex-col md:flex-row items-center justify-center px-10 gap-10 overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent)] animate-pulse" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>
      <motion.div
        className="flex-1 text-center md:text-left relative z-10"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Developer
          </span>
        </h1>

        
        <TypeAnimation
          sequence={[
            "Frontend Engineer 🚀",
            2000,
            "3D Enthusiast 🎨",
            2000,
            "Creative Coder 💡",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="block text-2xl font-medium text-purple-300 mt-3"
          repeat={Infinity}
        />

        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
          Crafting immersive web experiences with{" "}
          <span className="text-purple-400">3D visuals</span> &{" "}
          <span className="text-pink-400">smooth animations</span>.
        </p>

        
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_#a855f7]"
          >
            🚀 Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_#a855f7]"
          >
            📬 Contact Me
          </motion.a>
        </div>
      </motion.div>

    
      <motion.div
        className="flex-1 w-full h-[400px] md:h-[500px]"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <Canvas camera={{ position: [3, 2, 6] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <ComputerModel />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </motion.div>
    </section>
  );
}
export default Hero;
