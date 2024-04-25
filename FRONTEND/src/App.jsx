import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import Header from "./components/header";
import Hero from "./components/hero";
import Post from "./components/post";
import SeePost from "./components/seePost";

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Hero></Hero>
      <Post></Post>
      <SeePost></SeePost>
    </>
  );
}

export default App;
