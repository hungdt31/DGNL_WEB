import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import path from "./utils/path";
import { PublicLayout, HomePage, Login } from "./pages/public";
import ThemeContext from "./hooks/theme/ThemeContext";
import NavResponsive from "./hooks/Nav";
export default function App() {
  const { whiteTheme } = useContext(ThemeContext);
  return (
    <main
      className={`${
        whiteTheme ? "bg-white text-cyan-text" : "bg-[#181f29] text-white"
      }`}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path={path.PUBLIC_LAYOUT}
            element={
              <NavResponsive>
                <PublicLayout />
              </NavResponsive>
            }
          >
            <Route path={path.HOME} element={<HomePage />} />
            <Route path={path.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
