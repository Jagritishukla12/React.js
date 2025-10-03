function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-black/30 backdrop-blur-md shadow-lg z-50">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        MyPortfolio
      </h1>
      <div className="space-x-6 text-gray-300 font-medium">
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#gallery" className="hover:text-purple-400">Gallery</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;


