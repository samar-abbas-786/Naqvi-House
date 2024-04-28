import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Nav = () => {
  return (
    <div>
      <div className="navigation">
        <ul className="h-[60px] w-[100vw] bg-black flex items-center justify-evenly">
          <li className="text-white">
            <Link className="text-white text-lg" to="/">
              Home
            </Link>
          </li>
          <li className="text-white">
            <Link className="text-white text-lg" to="/Gallery">
              Gallery
            </Link>
          </li>

          <li className="text-white">
            <Link className="text-white text-lg" to="/Post">
              Post
            </Link>
          </li>

          <li className="text-blue">
            <Link className="text-blue-400 text-lg" to="/">
              Login
            </Link>
          </li>
          <li className="text-black px-3 py-[5px] rounded-md bg-blue-800 hover:bg-blue-700">
            <Link className="text-white text-lg" to="/">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
