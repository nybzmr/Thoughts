import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import PostFormCard from "./PostFormCard";
import PostCard from "./PostCard";
import './style.css'


const Home = () => {
  const [posts, setPosts] = useState([
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Lorem ipsum dolor sit amet...",
      "comments": 18,
      "imageUrl": "https://images.unsplash.com/photo-1616020453784-a24fa9845b05?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Beauty of India ",
      "comments": 18,
      "imageUrl": "https://www.tourism-of-india.com/pictures/travel_guide/things/nature-84.jpeg"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "This platform looks really good!!",
      "comments": 18,
      // "imageUrl": "https://example.com/image.jpg"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Budapest, Hungary",
      "comments": 18,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Budapest_Hungarian_Parliament_%2831363963556%29.jpg/800px-Budapest_Hungarian_Parliament_%2831363963556%29.jpg"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Jai Jawan! Jai Kisan!!",
      "comments": 18,
      "imageUrl": "https://www.aljazeera.com/wp-content/uploads/2020/07/ab4444beca4b486c82ae0bd34ca7f54b_8.jpeg?resize=770%2C513&quality=80"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time - Thomas Alva Edison",
      "comments": 18,
      // "imageUrl": "https://example.com/image.jpg"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "If wars can be started by lies, they can be stopped by truth",
      "comments": 18,
      // "imageUrl": "https://example.com/image.jpg"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Bill Gates:",
      "comments": 18,
      "imageUrl": "https://i.pinimg.com/originals/02/cf/6b/02cf6b975ca94c688d22f4ab580880d3.gif"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Lorem ipsum dolor sit amet...",
      "comments": 18,
      "imageUrl": "https://example.com/image.jpg"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Lorem ipsum dolor sit amet...",
      "comments": 18,
      "imageUrl": "https://example.com/image.jpg"
    },
    {
      "name": "John Doe",
      "time": "2 hours",
      "likes": 72,
      "postContent": "Lorem ipsum dolor sit amet...",
      "comments": 18,
      "imageUrl": "https://example.com/image.jpg"
    },
    {
      "name": "Jane Smith",
      "time": "5 hours",
      "likes": 45,
      "postContent": "Another post content...",
      "comments": 12,
      "imageUrl": "https://example.com/another-image.jpg"
    }
  ]);

  // useEffect(() => {
  //   // Replace with actual endpoint url by the time i m giving hardcoded data 
  //   fetch("url") 
  //     .then(response => response.json())
  //     .then(data => setPosts(data))
  //     .catch(error => console.error("Error fetching posts:", error));
  // }, []);
  return (
    <div className="text-left flex mt-4 gap-4">
      <div className="w-1/6 fixed block">
        <Navigation />
      </div>
      <div className="w-1/6"></div>
      <div className="w-3/4 px-16">
        <PostFormCard />
        {posts.map((post, index) => (
          <PostCard
            key={index}
            name={post.name}
            time={post.time}
            likes={post.likes}
            postContent={post.postContent}
            comments={post.comments}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
