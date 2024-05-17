import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import PostFormCard from "./PostFormCard";
import './style.css'
import Postdb from "./Postdb";


const Home = () => {

  return (
    <div className="text-left flex mt-4 gap-4">
      <div className="w-1/6 fixed block">
        <Navigation />
      </div>
      <div className="w-1/6"></div>
      <div className="w-3/4 px-16">
        <PostFormCard />
      {/* Getting posts from database */}
        <Postdb/>
      </div>
    </div>
  );
};

export default Home;
