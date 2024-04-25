import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import Header from "./components/header";
import Hero from "./components/hero";
import Post from "./components/post";

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Hero></Hero>
      <Post></Post>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
