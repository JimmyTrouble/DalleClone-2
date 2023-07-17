import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-4 px-4 py-4 font-medium text-xl border-gray-100 border-b-2">
      <Link to="/">
        <img src={logo} className="w-32 object-contain" />
      </Link>

      <Link to="/createpost">
        <h2 className="bg-blue-300 px-4 py-2 text-white rounded-md">Create</h2>
      </Link>
    </header>
  );
};

export default Header;
