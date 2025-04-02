import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-600">
        <div className="text-2xl font-semibold mb-2">SignUp</div>
        <input
          type="text"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 w-full rounded my-3"
          name="username"
        />
        <input
          type="text"
          placeholder="email"
          className="bg-gray-700 px-3 py-2 w-full rounded my-3"
          name="email"
          required
        />
        <input
          type="text"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 w-full rounded my-3"
          name="password"
          required
        />
        <div>
          <button className="bg-blue-400 text-sm font-semibold rounded p-2 w-full">
            SignUp
          </button>
          <Link
            to="/login"
            className="text-gray-400 text-semibold hover:text-gray-200 scale-105"
          >
            Already sign up ?Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
