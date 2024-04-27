import React, { useEffect, useState } from "react";
import axios from "axios";
// import image from `../uploaded-image/${post.image}`;

function SeePost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/post/getPost",
          { withCredentials: true }
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {data.map((post, i) => (
        <div
          key={i}
          className="card p-3 flex flex-col justify-center items-center h-max bg-gray-100 rounded-md mt-9 w-[90vw]"
        >
          <img
            className="w-[80%] h-max object-cover  rounded-md"
            src={`/src/uploaded-image/${post.image}`}
            alt={post.title}
            srcSet=""
          />
          <h1 className="text-3xl font-mono">
            <b>Title:</b>
            {post.title}
          </h1>
          <h3 className="text-2xl font-mono mt-2">
            <b>Description:</b>
            {post.description}
          </h3>
          <br />
        </div>
      ))}
    </div>
  );
}

export default SeePost;
