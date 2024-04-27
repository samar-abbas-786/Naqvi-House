import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import Post from "./components/post";
import Gallery from "./components/gallery";
// import NoPage from "./components/nopage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />

          <Route exact path="/Post" element={<Post />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          {/* <Route exact path="/teacher" element={<Teacher />} />
        <Route exact path="/student" element={<Student />} />
        <Route exact path="/updates" element={<Updates />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
