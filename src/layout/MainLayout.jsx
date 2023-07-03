import React from "react";
import { Outlet } from "react-router-dom";


import s from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <div className={s.layout}>
      <Outlet />
  </div>
  );
}

export default MainLayout;
