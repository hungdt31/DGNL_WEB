import { useState } from "react";
import ThemeContext from "./themeContext";

export default function Theme({children}){
  const [whiteTheme, setWhiteTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{whiteTheme, setWhiteTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}