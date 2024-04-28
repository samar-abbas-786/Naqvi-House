import React from "react";
import Error from "../assets/images/error.webp";
import Nav from "./nav";
import Header from "./header";

const nopage = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <img src={Error} width={400} alt="" srcset="" />
    </div>
  );
};

export default nopage;
