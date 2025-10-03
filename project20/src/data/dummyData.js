export const initialUsers = [
  { id: "u1", username: "adarsh", name: "Adarsh ", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: "u2", username: "maya", name: "Maya Sharma", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: "u3", username: "rahul", name: "Rahul Verma", avatar: "https://i.pravatar.cc/150?img=10" },
]

export const initialPosts = [
  {
    id: "p1",
    userId: "u2",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80",
    caption: "Sunset vibes #nature",
    likes: ["u1"],
    comments: [{ id: "c1", userId: "u1", text: "Beautiful!" }],
    createdAt: Date.now() - 1000 * 60 * 60 * 8,
  },
  {
    id: "p2",
    userId: "u3",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
    caption: "City lights ✨",
    likes: [],
    comments: [],
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
  },
];
