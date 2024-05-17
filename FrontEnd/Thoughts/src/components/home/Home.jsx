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
