import React from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

import s from "./MainLayout.module.scss";

function MainLayout() {
  return (
    // <div className={s.layout}>
    //   <Navigation /> 
    //    <div>
    //     <Outlet />
    //   </div>
    // </div>
    <div className={s.layout}>
      <Outlet />
  </div>
  );
}

export default MainLayout;
