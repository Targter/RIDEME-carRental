import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CarComponent2 = ({ car }) => {
  const AnimatedNavLogo = () => {
    return (
      <div className="group relative w-8 h-8 flex items-center justify-center cursor-pointer">
        <ChevronRight className="w-4 h-4 text-black z-10" strokeWidth={2.5} />
        <div className="absolute inset-0">
          <div className="absolute inset-0 border-2 border-black rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
          <div className="absolute inset-0 border-2 border-transparent rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[#0d9488] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white w-full flex justify-center overflow-hidden">
      <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center min-h-[400px] border-b-2 p-4 md:p-0 pb-11 max-w-7xl">
        {/* Image - Always first on mobile, position depends on car.side for desktop */}
        <div
          className={`w-full md:w-[45%] p-4 md:p-0  ${
            car.side === "right" ? "md:order-last" : "md:order-first"
          }`}
        >
          <img
            src={car?.image}
            alt={car?.brand || "Car"}
            className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] lg:max-h-none"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-[25%] md:w-[35%] flex flex-col gap-1 md:gap-8 items-center md:items-start justify-center text-black md:ml-16 p-4 md:p-0 ">
          <div className="logo">
            <img
              src={car?.logo}
              alt={car?.brand || "Logo"}
              className="max-w-[150px] md:max-w-[200px]"
            />
          </div>
          <Link to="/cars/">
            <div className="flex flex-col gap-4 w-full items-center md:items-start">
              {car?.features?.map((feature, index) => (
                <div
                  key={index}
                  className="text-sm md:text-base tracking-widest flex items-center gap-4"
                >
                  <AnimatedNavLogo />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarComponent2;
