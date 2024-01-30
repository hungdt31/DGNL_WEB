import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import path from "./utils/path";
import { PublicLayout, HomePage, Login } from "./pages/public";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
          <Route path={path.HOME} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
