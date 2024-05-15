import React from "react";
import Card from "./Card";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="text-left flex mt-4 max-w-4xl mx-auto gap-4">
      <div className="w-1/3">
        <div >
            <Navigation/>
        </div>
      </div>
      <div className="grow">
        <Card>Form here</Card>
        posts
      </div>
    </div>
  );
};

export default Home;
