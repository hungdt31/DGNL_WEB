import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navigation, SubNavigation } from "~/components";
import NavContext from "~/hooks/NavContext";
import { useContext } from "react";
const PublicLayout = () => {
  const { nav } = useContext(NavContext);
  return (
    <main className="flex flex-col justify-between h-full">
      <Navigation />
      <div className="mt-[100px]">
        {nav && <SubNavigation />}
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default PublicLayout;
