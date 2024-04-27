import React from "react";
import Nav from "./nav";
import Header from"./header"
import SeePost from "./seePost";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <SeePost></SeePost>
    </div>
  );
};

export default Home;
