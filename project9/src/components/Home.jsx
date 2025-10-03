import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

function Home() {
  
  const previews = {
    articles: [
      {
        title: "React Best Practices",
        content: "React apps me performance aur structure ke liye tips...",
        category: "Article",
        author: "Jagriti Shukla",
        date: "19 Sept 2025",
      },
    ],
    news: [
      {
        title: "Tech Conference 2025",
        content: "AI aur Web3 par naye updates announce kiye gaye...",
        category: "News",
        author: "Jagriti Shukla",
        date: "17 Sept 2025",
      },
    ],
    opinions: [
      {
        title: "AI Future",
        content: "Artificial Intelligence ka future aur ethical challenges...",
        category: "Opinion",
        author: "Jagriti Shukla",
        date: "19 Sept 2025",
      },
    ],
    guidance: [
      {
        title: "Career in Web Development",
        content: "Beginner to advanced path for web developers...",
        category: "Guidance",
        author: "Jagriti Shukla",
        date: "13 Sept 2025",
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
         Welcome to My Blog
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Explore Articles, News, Opinions, and Guidance all in one place.
      </p>
<p > </p>
      
      <div className="space-y-12">
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 w-30 "> Latest Articles</h2>
          {previews.articles.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
          <Link
            to="/articles"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>
        </section>

        
        <section>
          <h2 className="text-2xl font-semibold mb-4 ">📰 Latest News</h2>
          {previews.news.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
          <Link
            to="/news"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>
        </section>

        
        <section>
          <h2 className="text-2xl font-semibold mb-4">✍️ Opinions</h2>
          {previews.opinions.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
          <Link
            to="/opinion"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
          { previews.opinions.map((post, index ) => (

            <postCard key ={index} {...post} />
          ))}
          <link 
          to ="/latest"
          className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Read More →
          </link>
        </section>
        <section >
          <h2 classname="text-4xl font-semibold mb-4 bg-pink-200">lattest job </h2>
          {previews.opinions.map((post, index) => (

          <postCard key = {index}  { ...post} />
          ))}
          <link 
          to ="/latest"
          className="inline-block mt-4 text-blue-600 font-medium hover:underline">
             Read More →
          </link>
        </section>





        
        <section>
          <h2 className="text-2xl font-semibold mb-4">🎯 Guidance</h2>
          {previews.guidance.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
          <Link
            to="/guidance"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Read More →
          </Link>
        </section>
       
      </div>
    </div>
  );
}

export default Home;
