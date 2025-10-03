import PostCard from "../components/PostCard";

function Article() {
  const posts = [
    {
      title: "React Best Practices",
      content:
        "React apps me code structure aur performance ke liye best practices ka use karna zaroori hai...",
      category: "Article",
      author: "Jagriti Shukla",
      date: "17 Sept 2025",
    },
    {
      title: "Healthy Lifestyle",
      content:
        "Balanced diet, exercise aur mental health par focus karke ek healthy lifestyle maintain kiya jaa sakta hai...",
      category: "Article",
      author: "Jagriti Shukla",
      date: "16 Sept 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-pink-300 to-yellow-200 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
        📚 Articles
      </h1>
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Article;
