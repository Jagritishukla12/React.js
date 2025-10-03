import PostCard from "../components/PostCard";

function News() {
  const posts = [
    {
      title: "Tech Conference 2025",
      content:
        "Is saal ki biggest tech conference me AI aur Web3 par major announcements hue...",
      category: "News",
      author: "Jagriti Shukla",
      date: "15 Sept 2025",
    },
    {
      title: "SpaceX Mission Update",
      content:
        "SpaceX ne apne naye rocket launch ka successful test complete kiya hai...",
      category: "News",
      author: "Jagriti Shukla",
      date: "14 Sept 2025",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        📰 Latest News
      </h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default News;
