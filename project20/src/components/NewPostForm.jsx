import { useState } from "react";

export default function NewPostForm({ onCreate }) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!image) return;
    onCreate({ image, caption });
    setImage("");
    setCaption("");
  }

  return (
    <form onSubmit={submit} className="bg-white border p-4 rounded-md mb-4">
    
    
      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL"
        className="w-full border px-3 py-2 rounded mb-2"
      />
      <textarea
        value={caption}
        onChange={e => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="w-full border px-3 py-2 rounded mb-2"
      />
   
        
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
    </form>
  );

}