import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-600">
        <div className="text-2xl font-semibold mb-2">Login</div>
        <input
          type="text"
          placeholder="username"
          className="bg-gray-700 px-3 py-2 w-full rounded my-3"
          name="username"
        />
        <input
          type="text"
          placeholder="password"
          className="bg-gray-700 px-3 py-2 w-full rounded my-3"
          name="password"
          required
        />
        <div className="">
          {" "}
          <button className="bg-blue-400 text-sm font-semibold rounded p-2 w-full">
            Login
          </button>
          <Link
            to="/signup"
            className="text-gray-400 text-semibold hover:text-gray-200 scale-105"
          >
            Haven't you sign up yet?Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
