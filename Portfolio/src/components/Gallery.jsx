import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

function Gallery() {
  return (
    
    
    <section
      id="gallery"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 
                 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white"
    >
    
      <motion.h2
        className="text-4xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-pink-400 to-purple-500 mb-14 text-center"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
      >
        Gallery
        
      </motion.h2 >
      <motion.h3 className="text-4xl font-extrabold text-transparent bg-clip-text
                             bg-gradient-to-r from-pink-400 to-purple-500 mb-14 text-center"
                             
           initial="hidden"    
           whileInView="visible" 
           transition={{ duration :1}}   
                    
      >
      </motion.h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-6">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <motion.div
            key={item}
            variants={i % 2 === 0 ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg bg-white/10 backdrop-blur-md 
                       border border-white/10 hover:shadow-purple-500/40 transition-all duration-500"
          >
            <img
              src={`https://picsum.photos/800/600?random=${item}`}
              alt={`Gallery ${item}`}
              className="w-full h-60 object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
