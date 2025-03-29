import React from "react";
import Sidebar from "../Components/Home/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex h-[98vh] gap-2 md:gap-4 ">
        <div className=" w-1/6 border border-gray-500 rounded p-1 md:p-4 ">
          <Sidebar />
        </div>
        <div className=" border border-gray-500 rounded p-1 md:p-4 w-5/6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
