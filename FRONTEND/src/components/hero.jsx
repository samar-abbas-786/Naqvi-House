import React from "react";
import Hero from "../assets/images/Hero.png";

const hero = () => {
  return (
    <div>
      <div className="upper bg-black">
        <img
          className="h-fit opacity-70 object-cover"
          src={Hero}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
};

export default hero;
