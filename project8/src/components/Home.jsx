import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const sections = [
    { title: "Articles", description: "Read detailed articles.", color: "bg-blue-500", link: "/articles" },
    { title: "News", description: "Latest news updates.", color: "bg-green-500", link: "/news" },
    { title: "Opinion", description: "Thoughts & opinions.", color: "bg-purple-500", link: "/opinion" },
    { title: "Guidance", description: "Tips & guidance.", color: "bg-yellow-500", link: "/guidance" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Welcome to MyBlog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((sec) => (
          <div
            key={sec.title}
            onClick={() => navigate(sec.link)}
            className={`${sec.color} cursor-pointer rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-300`}
          >
            <h2 className="text-2xl font-bold text-white mb-2">{sec.title}</h2>
            <p className="text-white text-sm">{sec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
