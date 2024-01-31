import React, { useEffect, useState, useContext } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import Button from "./common/Button";
import NavBtn from "~/utils/NavBtn";
import NavContext from "~/hooks/NavContext";
import ToggleTheme from "./common/ToggleTheme";
import ThemeContext from "~/hooks/theme/themeContext";
import Theme from "~/hooks/theme/Theme";

const Navigation = () => {
  const {whiteTheme} = useContext(ThemeContext);
  const {nav, setNav} = useContext(NavContext);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const {btns, getBtn} = NavBtn;
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    setNav(null);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize.width >= '768']);

  return (
    <div className={`w-full h-[100px] flex justify-between items-center fixed z-50 ${whiteTheme ? 'bg-white' : 'bg-black'} `}>
      <h1 className="font-bold text-3xl px-3">DGNL TEST</h1>
      <div className="md:flex items-center w-1/2 hidden lg:w-1/3 justify-between p-7">
        {getBtn()}
        <Button text={"Đăng nhập"}></Button>
        <ToggleTheme/>
      </div>
      <div onClick={() => setNav(!nav)} className="md:hidden mx-5">
        <TfiAlignRight size={30} />
      </div>
    </div>
  );
};

export default Navigation;
