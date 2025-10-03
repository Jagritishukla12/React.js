function Navbar({ activePage, setActivePage }) {
  const links = ["Home", "Guidance", "Opinion", "News", "Article"];

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-center space-x-6 shadow-md">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => setActivePage(link)}
          className={`px-3 py-1 rounded hover:bg-gray-700 ${
            activePage === link ? "bg-gray-700" : ""
          }`}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
