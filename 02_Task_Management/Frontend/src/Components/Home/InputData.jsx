import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const InputData = ({ inputdiv, setInputdiv }) => {
  return (
    <>
      <div
        className={` ${inputdiv} fixed top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      {/* ------------------------------- */}
      <div
        className={` ${inputdiv} fixed top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="  w-2/6 bg-gray-900 p-4 rounded ">
          <div
            className="flex justify-end p-1"
            onClick={() => {
              setInputdiv("hidden");
            }}
          >
            <button className="text-2xl text-gray-500 hover:scale-110 hover:duration-300 hover:transition-all hover:text-gray-200">
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded bg-gray-700 text-white w-full mb-1"
          />
          <textarea
            name="desc"
            id=""
            cols={30}
            rows={10}
            placeholder="Description.."
            className="px-3 py-2 rounded w-full bg-gray-700 text-white mb-1 "
          ></textarea>

          <div>
            <button className="px-3 py-2 bg-blue-400 rounded text-black mb-2 ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
