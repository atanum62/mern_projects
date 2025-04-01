import React from "react";
import Cards from "../Components/Home/Cards";
import { IoAddCircleSharp } from "react-icons/io5";
const Alltasks = () => {
  return (
    <div>
      <div className="w-full flex justify-end px-4">
        <button>
          <IoAddCircleSharp className="text-4xl text-gray-400 hover:scale-105 hover:transition-all hover:duration-300 hover:text-gray-200" />
        </button>
      </div>
      <Cards home={"true"} />
    </div>
  );
};

export default Alltasks;
