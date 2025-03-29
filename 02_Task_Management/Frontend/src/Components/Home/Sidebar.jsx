import React from "react";
import { sidebardata } from "../../utils/Homehelper";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Welcome to website</h2>
        <h4 className="my-1 text-gray-400">eewrw@ii.rco</h4>
        <hr />
      </div>
      <div>
        {sidebardata.map((data, i) => (
          <Link
            to={data.link}
            key={i}
            className="my-2   flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300"
          >
            {data.icon}&nbsp;{data.title}
          </Link>
        ))}
      </div>
      <div className=" absolute bottom-10 ">
        <button className="bg-gray-600 w-full border rounded p-2 px-5">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Sidebar;
