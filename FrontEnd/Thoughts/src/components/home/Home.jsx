import React from "react";
import Navigation from "./Navigation";
import PostFormCard from "./PostFormCard";
import PostCard from "./PostCard";
import './style.css'


const Home = () => {
  
  return (
    <div className="text-left flex mt-4 gap-4">
      <div className="w-1/4">
        <div>
          <Navigation />
        </div>
      </div>
      <div className="w-3/4">
        <PostFormCard />
        <PostCard/>
      </div>
    </div>
  );
};

export default Home;
