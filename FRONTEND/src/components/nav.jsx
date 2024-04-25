import React from "react";
// import { Link, to } from "react-router-dom"; // Import Link from react-router-dom

const Nav = () => {
  return (
    <div>
      <div className="navigation">
        <ul className="h-[60px] w-[100vw] bg-black flex items-center justify-evenly">
          <li className="text-white">
            <a className="text-white text-lg " href="">
              Gallery
            </a>
          </li>

          <li className="text-white">
            <a className="text-white text-lg " href="">
              Announcement
            </a>
          </li>

          <li className="text-blue">
            <a className="text-blue-400 text-lg " href="">
              login
            </a>
          </li>
          <li className="text-black px-3 py-1 rounded-md bg-blue-800 hover:bg-blue-700">
            <a className="text-white text-lg " href="">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
