import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.2,
      class: "is-reveal",
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(containerRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    const text = heroTextRef.current.innerText.split("");
    heroTextRef.current.innerHTML = text
      .map((char) => `<span class="inline-block opacity-0">${char}</span>`)
      .join("");

    gsap.to(heroTextRef.current.querySelectorAll("span"), {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power4.out",
    });
    const cursor = cursorRef.current;
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="bg-black text-white font-sans relative"
    >
      <div
        ref={cursorRef}
        className="w-8 h-8 bg-yellow-400 rounded-full fixed top-0 left-0 pointer-events-none z-[999]"
      ></div>
      <header data-scroll className="fixed w-full top-0 flex justify-between items-center px-10 py-6 z-50 bg-black/60 backdrop-blur-lg">
  <h1 className="text-2xl font-bold tracking-widest">OCHI</h1>
  
  <div className="flex items-center gap-6">
  
    <nav className="flex gap-10 text-lg uppercase">
      <a href="#work" className="hover:text-yellow-400" onClick={(e) => { e.preventDefault(); document.querySelector("#work").scrollIntoView({ behavior: "smooth" }); }}>Work</a>
      <a href="#studio" className="hover:text-yellow-400" onClick={(e) => { e.preventDefault(); document.querySelector("#studio").scrollIntoView({ behavior: "smooth" }); }}>Studio</a>
      <a href="#contact" className="hover:text-yellow-400" onClick={(e) => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}>Contact</a>
    </nav>

    
    <div className="relative">
      <input 
        type="text"
        placeholder="Search..." 
        className="pl-10 pr-14 py-2 rounded-full bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
    </div>
  </div>
</header>
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h2
          ref={heroTextRef}
          className="text-5xl md:text-8xl font-extrabold leading-tight uppercase"
        >
          We Build Bold Brands
        </h2>
      </section>
      <section
        id="work"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://picsum.photos/800/600?random=1"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h3 className="text-4xl font-bold mb-4">Creative Strategy</h3>
            <p className="text-gray-400 text-lg">
              Bold storytelling meets powerful branding.
            </p>
          </div>
        </div>
      </section>
      <section
        id="studio"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">Minimal Design</h3>
            <p className="text-gray-400 text-lg">
              Inspired by award-winning studios with modern minimalism.
            </p>
          </div>
          <img
            src="https://picsum.photos/800/600?random=2"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>
      <section
        id="work"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://picsum.photos/800/600?random=1"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h3 className="text-4xl font-bold mb-4">Creative Strategy</h3>
            <p className="text-gray-400 text-lg">
              Bold storytelling meets powerful branding.
            </p>
          </div>
        </div>
      </section>
      <section
        id="studio"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">Minimal Design</h3>
            <p className="text-gray-400 text-lg">
              Inspired by award-winning studios with modern minimalism.
            </p>
          </div>
          <img
            src= "https://picsum.photos/800/600?random=4"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>
       <section
        id="work"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://picsum.photos/800/600?random=5"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h3 className="text-4xl font-bold mb-4">Creative Strategy</h3>
            <p className="text-gray-400 text-lg">
              Bold storytelling meets powerful branding.
            </p>
          </div>
        </div>
      </section>
             <section
        id="studio"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">Minimal Design</h3>
            <p className="text-gray-400 text-lg">
              Inspired by award-winning studios with modern minimalism.
            </p>
          </div>
          <img
            src= "https://picsum.photos/800/600?random=6"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>
        <section
        id="work"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://picsum.photos/800/600?random=7"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h3 className="text-4xl font-bold mb-4">Creative Strategy</h3>
            <p className="text-gray-400 text-lg">
              Bold storytelling meets powerful branding.
            </p>
          </div>
        </div>
      </section>
          <section
        id="studio"
        data-scroll
        className="h-screen flex items-center justify-center px-10"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">Minimal Design</h3>
            <p className="text-gray-400 text-lg">
              Inspired by award-winning studios with modern minimalism.
            </p>
          </div>
          <img
            src= "https://picsum.photos/800/600?random=8"
            alt="Project"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>
   <div
  id="contact"
  data-scroll
  className="min-h-screen flex flex-col items-center justify-center px-3 py-10 border-t border-gray-800 bg-gradient-to-br from-gray-500 via-gray to-gray-500"
>
  <h2 className="text-5xl font-bold mb-8 uppercase text-yellow-400 drop-shadow-lg">
    Contact Us
  </h2>

  <form className="w-full max-w-xl space-y-6 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">
    <div>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 
                   transition duration-300 hover:shadow-yellow-400/40 focus:shadow-yellow-400/60"
      /> 
    </div>
    <div>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 
                   transition duration-300 hover:shadow-yellow-400/40 focus:shadow-yellow-400/60"
      />
    </div>
    <div>
      <textarea
        placeholder="Your Message"
        rows="5"
        className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 shadow-md 
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 
                   transition duration-300 hover:shadow-yellow-400/40 focus:shadow-yellow-400/60"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold 
                 hover:bg-yellow-300 shadow-lg hover:shadow-yellow-500/70 
                 transition duration-300"
    >
      Send Message
    </button>
  </form>
</div>
<footer id="contact" data-scroll className="py-10 text-center border-t border-gray-800" > <p className="text-gray-500 uppercase tracking-widest"> © 2025 OCHI Design Clone | Inspired by Awwwards </p> </footer>

    </div>
  );
}
