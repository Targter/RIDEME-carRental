import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const NavbarOwner = () => {
  const { user } = useAppContext();

  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-2 text-gray-500 border-b border-borderColor relative transition-all">
      <Link to="/">
        <img src={assets.Logo} alt="" className="h-10" />
      </Link>
      <p>Welcome, {user?.name || "Owner"}</p>
    </div>
  );
};

export default NavbarOwner;
