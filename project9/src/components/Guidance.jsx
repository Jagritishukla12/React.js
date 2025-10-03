import PostCard from "../components/PostCard";

function Guidance() {
  const posts = [
    {
      title: "Career in Web Development",
      content:
        "Web development kaafi demand me hai. Yahan maine beginner to advanced path explain kiya hai...",
      category: "Guidance",
      author: "Jagriti Shukla",
      date: "13 Sept 2025",
    },
    {
      title: "Time Management Tips",
      content:
        "Students aur professionals ke liye effective time management tips jo productivity badhaye...",
      category: "Guidance",
      author: "Jagriti Shukla",
      date: "12 Sept 2025",
    },
  ];
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🎯 Guidance
      </h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Guidance;
