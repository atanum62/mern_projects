import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name) {
      setError("please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("please enter the password.");
      return;
    }

    setError("");
    //signup api call
  };
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28 ">
        <div className="w-80 md:w-110 lg:w-96   rounded bg-white px-7 py-10 drop-shadow">
          <form action="" onSubmit={handleSignup}>
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box  border-zinc-200 lg:w-85"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box  border-zinc-200 lg:w-85"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className=" text-sm text-center mt-4">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-[var(--primary)] underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
