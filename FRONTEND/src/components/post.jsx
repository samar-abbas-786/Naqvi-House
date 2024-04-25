import React from "react";
import axios from "axios";
import "../App.css";

const post = () => {
  return (
    <div>
      <div className="box h-[80vh] w-screen bg-blue-200 flex flex-col  justify-center items-center">
        <h1 className="mb-[4rem] text-4xl text-[#262626] font-semibold ">
          Lets Create a Post
        </h1>
        <form
          action="http://localhost:3000/api/post/post"
          method="post"
          encType="multipart/form-data"
          className=" inside-input h-[50vh] w-[90vw] bg-white rounded-lg flex flex-col justify-around items-center "
        >
          <input name="image" type="file" placeholder="Post Your Image" />
          <input
            name="title"
            type="text"
            placeholder="Enter the Title of Post"
          />
          <input
            name="description"
            type="text"
            placeholder="Enter the Description of Post"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default post;
