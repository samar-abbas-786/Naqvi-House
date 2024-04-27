import React from "react";
import Hero from "../assets/images/Hero.png";

const hero = () => {
  return (
    <div>
      <div className="upper bg-black">
        <img
          className="h-[90vh] opacity-70  w-full object-cover"
          src={Hero}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default hero;
