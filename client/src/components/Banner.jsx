// import React from "react";
// import { assets } from "../assets/assets";
// import { motion } from "motion/react";

// const Banner = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="flex flex-col md:flex-row md:items-center items-center justify-center px-8 min-md:pl-14 pt-10 bg-[#181818]  mx-3 md:mx-auto  overflow-hidden md:h-[400px] "
//     >
//       <div className="flex w-[80%] justify-around items-center">
//         <div className="text-white gap-5">
//           <h2 className="text-3xl font-medium">Do You Own a Luxury Car?</h2>
//           <p className="mt-2">
//             Monetize your vehicle efforlesslt by listing it on CarRental.
//           </p>
//           <p className="max-w-130">
//             We take care of insurance, driver verification and secure payments -
//             so you can earn passive income, stress-free.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer"
//           >
//             List your car!
//           </motion.button>
//         </div>

//         <motion.img
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           src={assets.banner_car_image}
//           alt="car"
//           className="max-h-45 mt=16"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default Banner;

//

import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Changed from "motion/react"

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#181818] py-12 px-6 md:px-14 md:py-0 w-full max-w-7xl mx-auto min-h-[400px] flex items-center "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
        {/* Text Content - Always on top for mobile */}
        <motion.div
          className="text-white flex-1 text-center md:text-left order-1 md:order-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Do You Own a Luxury Car?
          </h2>
          <p className="text-gray-300 mb-3">
            Monetize your vehicle effortlessly by listing it on CarRental.
          </p>
          <p className="text-gray-300 mb-6 max-w-[500px] mx-auto md:mx-0">
            We take care of insurance, driver verification and secure payments -
            so you can earn passive income, stress-free.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] transition-all text-white rounded-lg text-sm cursor-pointer"
          >
            List your car!
          </motion.button>
        </motion.div>

        {/* Image - Below text on mobile, side by side on desktop */}
        <motion.div
          className="flex-1 order-2 md:order-none"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src={assets.banner_car_image}
            alt="Luxury car"
            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
