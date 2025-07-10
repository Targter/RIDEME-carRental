import React, { useEffect, useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"; // Changed from "motion/react"
const Navbar = () => {
  const { setShowLogin, user, logout, isOwner, axios, setIsOwner } =
    useAppContext();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolledPast100, setScrolledPast100] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setScrolled(latest > 50);
    setScrolledPast100(latest > 100);
  });

  useEffect(() => {
    if (hidden) {
      document.body.classList.add("hide-scrollbar");
    } else {
      document.body.classList.remove("hide-scrollbar");
    }

    return () => {
      document.body.classList.remove("hide-scrollbar");
    };
  }, [hidden]);

  const getBackground = () => {
    if (location.pathname !== "/") return "bg-[#181818]";
    if (scrolled) return "bg-[#181818]";
    return "bg-[linear-gradient(to_top,rgba(0,0,0,0),rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8))]";
  };

  const changeRole = async () => {
    try {
      const { data } = await axios.post("/api/owner/change-role");
      if (data.success) {
        setIsOwner(true);
        toast.success(data.message);
      } else {
        toast.error(data.message + " or login required");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Desktop Navigation (md and above)
  const DesktopNav = () => (
    <motion.div
      className={`
        hidden md:flex items-center justify-between w-full 
        text-white  p-1 pt-2 fixed top-0 z-[9]
        ${getBackground()}
        ${scrolledPast100 ? "bg-[#181818]" : ""}
      `}
      initial={{ y: 0 }}
      animate={{
        y: hidden ? -100 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="flex w-[75%] gap-11 pl-11">
        {" "}
        {/* Logo */}
        <Link to={"/"}>
          {" "}
          <div className="flex items-center">
            <img src={assets.Logo} alt="Company Logo" className="h-10 w-10 " />
          </div>
        </Link>
        {/* Desktop Menu Items */}
        <div className="flex items-center gap-8">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-gray-300 text-base "
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => (isOwner ? navigate("/owner") : changeRole())}
            className="hover:text-gray-300 text-base"
          >
            {isOwner ? "Dashboard" : "List cars"}
          </button>
          <button
            onClick={() => (user ? logout() : setShowLogin(true))}
            className="px-3 py-1 bg-[#0d9488] hover:bg-[rgba(13,148,136,0.7)] rounded-lg text-base"
          >
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Mobile Navigation (below md)
  const MobileNav = () => (
    <motion.div
      className="md:hidden flex items-center justify-between overflow-hidden text-white bg-[#181818] p-2 pr-0 pb-0 fixed top-0 z-[9] pl-11 w-full"
      initial={{ y: 0 }}
      animate={{
        y: hidden ? -100 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="flex w-[80%] justify-between">
        {" "}
        {/* Logo */}
        <Link to={"/"}>
          {" "}
          <div className="flex items-center z-50">
            <img
              src={assets.Logo}
              alt="Company Logo"
              className="h-10 text-white"
            />
          </div>
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="z-50  "
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <img
            src={open ? assets.close_icon : assets.menu_icon}
            alt={open ? "Close" : "Menu"}
            className="h-6 w-6 text-white "
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#181818] z-40 pt-12 pr-0 mr-0"
        >
          <div
            className="flex flex-col items-start pl-13 gap-4 
           mt-2 border-t-2 border-[rgba(199,89,89,0.8)] pt-6  "
          >
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-xl"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                isOwner ? navigate("/owner") : changeRole();
                setOpen(false);
              }}
              className="text-xl  text-left"
            >
              {isOwner ? "Dashboard" : "List cars"}
            </button>
            <button
              onClick={() => {
                user ? logout() : setShowLogin(true);
                setOpen(false);
              }}
              className="mt-1 px-4 py-1 bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] rounded-lg text-xl"
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export default Navbar;
