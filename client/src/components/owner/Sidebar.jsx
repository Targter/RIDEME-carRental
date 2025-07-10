import React, { useState } from "react";
import { assets } from "../../assets/assets";
// import { ownerMenuLinks } from "../../assets/assets2.jsx";
import { ownerMenuLinks } from "../../assets/assests2";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { user, axios, fetchUser } = useAppContext();
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axios.post("/api/owner/update-image", formData);

      if (data.success) {
        fetchUser();
        toast.success(data.message);
        setImage("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-8 sm:w-20 w-15 md:w-60 border-r border-borderColor text-sm">
      {/* Profile Image Section */}
      <div className="group relative w-full flex flex-col items-center px-4">
        <label htmlFor="image" className="cursor-pointer">
          <img
            src={
              image ? URL.createObjectURL(image) : user?.image || "./user.png"
            }
            alt="Profile"
            className="h-8 w-8 rounded-full mx-auto object-cover "
            fill="#0d9488"
            strokeWidth={0}
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="absolute hidden inset-0 bg-black/10 rounded-full group-hover:flex items-center justify-center">
            <img src={assets.edit_icon} alt="Edit" className="w-4 h-4" />
          </div>
        </label>

        {image && (
          <button
            onClick={updateImage}
            className="mt-2 flex items-center justify-center p-1 gap-1 bg-primary/10 text-[#0d9488] text-xs rounded"
          >
            Save <img src={assets.check_icon} width={13} alt="" />
          </button>
        )}
        <p className="mt-2 text-base hidden md:block">{user?.name}</p>
      </div>

      {/* Navigation Links */}
      <div className="w-full mt-4">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) => `
                            relative flex items-center justify-center md:justify-start gap-2 w-full py-3 px-4 
                            ${isActive ? "bg-[#0d9488]/10 text-[#0d9488]" : ""}
                               hover:bg-gray-100 transition-colors duration-200
                        `}
          >
            <div className="flex items-center">
              {location.pathname === link.path ? link.coloredIcon : link.icon}
            </div>
            <span className="hidden md:inline">{link.name}</span>
            {({ isActive }) =>
              isActive && (
                <div className="hidden md:block bg-[#0d9488] w-1.5 h-8 rounded-l absolute right-0"></div>
              )
            }
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
