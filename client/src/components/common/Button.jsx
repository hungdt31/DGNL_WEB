import React from "react";
import { useContext } from "react";
import ThemeContext from "~/hooks/theme/themeContext";
const Button = ({ text, ClickEvent }) => {
  const {whiteTheme} = useContext(ThemeContext);
  return (
    <button className={` rounded-lg px-3 py-2 ${whiteTheme ? "border-cyan-text hover:bg-cyan-200":"border-white hover:bg-cyan-900"} border-2`} onClick={ClickEvent}>
      {text}
    </button>
  );
};

export default Button;
