import React from "react";
import NavBtn from "~/utils/NavBtn";
import Button from "./common/Button";
import path from "~/utils/path";
import { Link } from "react-router-dom";

const SubNavigation = () => {
  const { getBtn } = NavBtn;
  return (
    <div>
      <div className="gap-7 p-3 flex flex-wrap justify-center">
        {getBtn()}
        <Link to={path.LOGIN}>
          <Button text={"Đăng nhập"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default SubNavigation;
