import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
const Cards = ({ home, setInputdiv }) => {
  const data = [
    {
      title: "The Best Coding Channel",
      desc: " I have to create my channel the best ever coding channel in Hindi for those who do not understand English pro.",
      status: "In Complete",
    },
    {
      title: "The Best Coding Channel",
      desc: " I have to create my channel the best ever coding channel in Hindi for those who do not understand English pro.",
      status: "Complete",
    },
    {
      title: "The Best Coding Channel",
      desc: " I have to create my channel the best ever co",
      status: "In Complete",
    },
    {
      title: "The Best Coding Channel",
      desc: " I have to create my channel the best ever coding channel in Hindi for those who do not understand English pro.",
      status: "In Complete",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div
            key={i}
            className="border border-gray-500 rounded-sm p-4 bg-gray-700 flex flex-col justify-between"
          >
            <div key={i} className="">
              <h3 className="text-xl font-bold">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 flex  items-center w-full">
              <button
                className={`${
                  items.status === "In Complete" ? "bg-red-400" : "bg-green-700"
                } rounded-sm p-2 text-sm w-3/6`}
              >
                {items.status}
              </button>
              <div className="text-white   w-3/6 justify-around flex rounded-sm px-2 py-2 text-2xl">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <div
          className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 border border-gray-500 hover:scale-105 hover:cursor-pointer"
          onClick={() => setInputdiv("fixed")}
        >
          <button>
            <IoAddCircleSharp className="text-2xl" />
          </button>
          <h2 className="text-2xl">Add Task</h2>
        </div>
      )}
    </div>
  );
};

export default Cards;
