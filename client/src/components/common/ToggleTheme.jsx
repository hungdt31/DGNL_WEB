import React, { useState } from "react";
import moon from "./moon.svg";
import sun from "./sun.svg";
import { useContext } from "react";
import ThemeContext from "~/hooks/theme/ThemeContext";

const ToggleTheme = () => {
  const { whiteTheme, setWhiteTheme } = useContext(ThemeContext);
  const [cls, setCls] = useState(true);
  const [y, setY] = useState(true);
  return (
    <div
      onClick={() => {
        setCls(!cls);
        setY(!y);
        setWhiteTheme(!whiteTheme);
      }}
      className={`rounded-full flex flex-col gap-3 p-3 relative ${
        cls ? "bg-black" : "bg-white"
      }`}
    >
      <img src={sun} width={20} />
      <img src={moon} width={20} />
      <button
        className={`rounded-full w-[100%] bg-gray-400 absolute ${
          whiteTheme
            ? "animate-[slideBottom_0.6s_ease-in-out]"
            : "animate-[slideTop_0.6s_ease-in-out]"
        } ${
          y ? "top-[50%]" : "top-0"
        } left-0 h-[43px] border-2 border-cyan-900`}
      ></button>
    </div>
  );
};

export default ToggleTheme;
