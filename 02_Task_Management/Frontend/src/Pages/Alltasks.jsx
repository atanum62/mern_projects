import React, { useState } from "react";
import Cards from "../Components/Home/Cards";
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from "../Components/Home/InputData";
const Alltasks = () => {
  const [inputdiv, setInputdiv] = useState("hidden");
  // const handleclose = () => {
  //   setInputdiv(!inputdiv);
  //   // console.log(inputdiv);
  // };
  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4">
          <button
            onClick={() => {
              setInputdiv("fixed");
            }}
          >
            <IoAddCircleSharp className="text-4xl text-gray-400 hover:scale-105 hover:transition-all hover:duration-300 hover:text-gray-200" />
          </button>
        </div>
        <Cards home={"true"} setInputdiv={setInputdiv} />
      </div>
      <InputData inputdiv={inputdiv} setInputdiv={setInputdiv} />
    </>
  );
};

export default Alltasks;
