import React from "react";
//import Navbar from "./Navbar";
import SidebarLight from "./SidebarLight";
//import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-auto h-screen bg-gray-200">
        <SidebarLight />
        {/* <div className="bg-orange-200">Header</div> */}
        <div className="grow">
          {/* <Navbar /> */}
          {/* <div className="flex-1">
            <Header />
          </div> */}
          <div className="m-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
