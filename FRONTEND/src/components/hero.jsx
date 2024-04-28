import React from "react";
import Hero from "../assets/images/Hero.png";
import { Link } from "react-router-dom";
const hero = () => {
  return (
    <div className="relative bg-black">
      {/* Text Overlay */}

      {/* Image */}
      <img
        className="w-full h-[90vh] object-cover opacity-40"
        src={Hero}
        alt="Hero Image"
      />

      <div className="absolute top-0 opacity-100 left-0 w-full h-[60vh] flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-white text-4xl">
          Welcome to My Family Group
        </h1>
        <p className="text-lg text-white font-sans px-3">
          A personal social media application for my Family
        </p>
        <button className="text-[16px] mt-5 rounded-sm px-4 py-[2px] bg-blue-700 text-white">
          <Link to="/Gallery">Uploaded Images</Link>
        </button>
      </div>
    </div>
  );
};

export default hero;
