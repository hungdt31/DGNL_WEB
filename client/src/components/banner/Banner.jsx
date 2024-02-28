import React from "react";
import banner from "./DGNL.png";
import { useEffect } from "react";
import Singleton from "../redux/Redux";
const Banner = () => {
  useEffect(() => {
    const singleTon = new Singleton()
    console.log(singleTon.getData())
  },[])
  return (
    <div className="w-full px-5 flex justify-center">
      <img src={banner} className="md:h-[500px] h-[250px] w-full rounded-3xl" />
    </div>
  );
};

export default Banner;
