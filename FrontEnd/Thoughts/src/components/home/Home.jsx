import React from "react";
import Navigation from "./Navigation";
import PostFormCard from "./PostFormCard";
import './style.css';
import Postdb from "./Postdb";
import Nav from "./Nav";
import Suggest from "./Suggest";

const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <div className="main-content">
        <div className="navbar-section">
          <Navigation />
        </div>
        <div className="posts-section">
          <PostFormCard />
          <Postdb />
        </div>
        <div className="suggest-section">
          <Suggest />
        </div>
      </div>
    </div>
  );
};

export default Home;
