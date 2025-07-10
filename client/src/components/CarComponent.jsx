import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const CarComponent = ({ car }) => {
  const { cars } = useAppContext();
  const AnimatedNavLogo = () => {
    return (
      <div className="group relative w-8 h-8 flex items-center justify-center cursor-pointer">
        <ChevronRight className="w-4 h-4 text-white z-10" strokeWidth={2.5} />
        <div className="absolute inset-0">
          <div className="absolute inset-0 border-2 border-white rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          <div className="absolute inset-0 border-2 border-transparent rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-auto w-full bg-[#181818] flex flex-col md:flex-row items-center justify-center min-h-[400px] border-b-2 p-4 md:p-0 pb-11 max-w-7xl">
      {/* Image - Always on top for mobile, position depends on car.side for desktop */}
      <div
        className={`w-full md:w-[40%]  md:p-0 p-4 ${
          car.side === "right" ? "md:order-last" : "md:order-first"
        }`}
      >
        <img
          src={car?.image}
          alt={car?.brand || "Car"}
          className="w-full h-auto object-contain max-h-[300px] md:max-h-none"
        />
      </div>

      {/* Content - Always below image for mobile */}
      <div className="w-full  lg:w-[25%] md:w-[35%] flex flex-col gap-6 md:gap-8 items-center md:items-start justify-center text-white md:ml-16 p-4 md:p-0 ">
        <div className="logo">
          <img
            src={car?.logo}
            alt={car?.brand || "Logo"}
            className="max-w-[150px] md:max-w-[200px] w-44 h-12"
          />
        </div>
        {/*  navigate(`/car-details/${car._id}`) */}
        <Link to="/cars/">
          <div className="flex flex-col gap-4 w-full items-center md:items-start">
            {car?.features?.map((feature, index) => (
              <div
                key={index}
                className="text-sm tracking-widest text-gray-300 md:text-white flex items-center gap-4"
              >
                <AnimatedNavLogo />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CarComponent;
