import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import path from "./utils/path";
import { PublicLayout, HomePage, Login } from "./pages/public";
import ThemeContext from "./hooks/theme/ThemeContext";

export default function App() {
  const {whiteTheme} = useContext(ThemeContext);
  return (
    <main className={`${whiteTheme ? "bg-white text-cyan-text" : "bg-black text-white"}`}>
    <BrowserRouter>
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
  );
}
