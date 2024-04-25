import React, { useEffect, useState } from "react";
import axios from "axios";

function SeePost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/post/getPost"
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the function here
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div className="flex flex-col items-center justify-center">
      {data.map((post, i) => (
        <div
          key={i}
          className="card p-1 flex flex-col justify-center items-center h-[300px] bg-gray-100 rounded-md mt-9 w-[90vw]"
        >
          <img
            className="w-[80vw] h-[200px] object-cover"
            src={post.image}
            alt={post.title}
            srcSet=""
          />
          <h1>
            <b>Title:</b>
            {post.title}
          </h1>
          <h3>
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
