import React from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const Navigate = useNavigate();
  const onLogout = () => {
    Navigate("/login");
  };
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>
        <SearchBar />
        <ProfileInfo onLogout={onLogout} />
      </div>
    </>
  );
};

export default Navbar;
