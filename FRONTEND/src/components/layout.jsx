import React from "react";
import Nav from "./nav";
import Header from "./header";
import SeePost from "./seePost";
import Hero from "./hero";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Hero></Hero>
      <SeePost></SeePost>
    </div>
  );
};

export default Home;
