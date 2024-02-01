import React from "react";
import banner from "./DGNL.png";

const Banner = () => {
  return (
    <div className="w-full px-5 flex justify-center">
      <img src={banner} className="md:h-[500px] h-[250px] w-full rounded-3xl" />
    </div>
  );
};

export default Banner;
