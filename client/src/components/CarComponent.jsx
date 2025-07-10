// import { ChevronRight, Navigation } from "lucide-react";
// import React from "react";

// const CarComponent = ({ car }) => {
//   const AnimatedNavLogo = () => {
//     return (
//       <div className="group relative w-8 h-8 flex items-center justify-center cursor-pointer">
//         {/* Navigation icon */}
//         <ChevronRight className="w-4 h-4 text-white z-10" strokeWidth={2.5} />

//         {/* Animated circle */}
//         <div className="absolute inset-0">
//           {/* Static white border */}
//           <div className="absolute inset-0 border-2 border-white rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

//           {/* Animated red fill */}
//           <div className="absolute inset-0 border-2 border-transparent rounded-full overflow-hidden">
//             <div className="absolute inset-0 bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   console.log("car:", car);
//   return (
//     <div
//       className="
//      h-auto w-full bg-[#181818] md:flex justify-center min-h-[400px] items-center  border-2"
//     >
//       {car.side == "right" ? (
//         <>
//           {" "}
//           <div
//             id="name"
//             className="flex flex-col w-[30%] gap-[30px] items-start justify-center  text-white "
//           >
//             <div className="logo">
//               <img src={car?.logo} alt="" />
//             </div>
//             <div className="flex flex-col gap-5">
//               {/* Your text content */}
//               <div className="text-sm tracking-widest text-gray-300 flex items-center gap-4">
//                 <AnimatedNavLogo /> <span>{car?.features[0]}</span>
//               </div>
//               <div className="text-sm tracking-widest text-gray-300 flex items-center gap-4">
//                 <AnimatedNavLogo />
//                 {car?.features[1]}
//               </div>

//               <div className="text-sm tracking-wider text-white mt-2 flex items-center gap-4">
//                 <AnimatedNavLogo />
//                 {car?.features[2]}
//               </div>

//               {/* Animated logo positioned to the right */}
//               <div className="flex justify-end mt-4"></div>
//             </div>
//           </div>
//           <div className=" w-[40%] ">
//             <img src={car?.image} alt="" />
//           </div>
//         </>
//       ) : (
//         <>
//           <div className=" w-[40%] ">
//             <img src={car?.image} alt="" />
//           </div>
//           <div
//             id="name"
//             className="flex flex-col w-[40%] gap-[30px] items-start justify-center ml-11"
//           >
//             <div className="logo">
//               <img src={car?.logo} alt="" className="w-[200px]" />
//             </div>
//             <div className="flex flex-col gap-5 text-white">
//               {/* Your text content */}
//               <div className="text-sm tracking-widest  flex items-center gap-4">
//                 <AnimatedNavLogo /> <span>{car?.features[0]}</span>
//               </div>
//               <div className="text-sm tracking-widest  flex items-center gap-4">
//                 <AnimatedNavLogo /> {car?.features[1]}
//               </div>

//               <div className="text-sm tracking-wider  mt-2 flex items-center gap-4">
//                 <AnimatedNavLogo />
//                 {car?.features[2]}
//               </div>

//               {/* Animated logo positioned to the right */}
//               <div className="flex justify-end mt-4"></div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CarComponent;

//

import { ChevronRight } from "lucide-react";
import React from "react";

const CarComponent = ({ car }) => {
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
      </div>
    </div>
  );
};

export default CarComponent;
