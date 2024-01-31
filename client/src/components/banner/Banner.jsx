import React from "react";
import banner from "./DGNL.png";
import NavContext from "~/hooks/NavContext";
import Button from "../common/Button";
import { useContext } from "react";
import NavBtn from "~/utils/NavBtn";
const Banner = () => {
  const { btns, getBtn } = NavBtn;
  const { nav, setNav } = useContext(NavContext);
  return (
    <div className="w-full px-7 flex">
      <div className="md:w-full">
        <img src={banner} className="md:h-[500px] h-[250px] w-full" />
      </div>
      {nav && (
        <div className="flex-col gap-5 p-3 right-0 flex w-1/3">
          {getBtn()}
          <Button text={"Đăng nhập"}></Button>
        </div>
      )}
    </div>
  );
};

export default Banner;
