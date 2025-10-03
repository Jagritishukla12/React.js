import PostCard from "../components/PostCard";

function Opinion() {
  const posts = [
    { title: "AI Future", content: "My thoughts on AI...", category: "Opinion" },
    { title: "Education System", content: "What's wrong with it...", category: "Opinion" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Opinion Posts</h1>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
    
  );
}

export default Opinion;
