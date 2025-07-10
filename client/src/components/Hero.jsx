import React, { useState } from "react";
import { assets, cityList, carVideo, homeImagee } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion, scale } from "motion/react";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } =
    useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      "/cars?pickupLocation=" +
        pickupLocation +
        "&pickupDate=" +
        pickupDate +
        "&returnDate=" +
        returnDate
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className=" h-screen flex flex-col items-center justify-end gap-14 text-center containerBox bg-red-900 w-full overflow-y-hidden"
      style={{ backgroundImage: `url(${homeImagee})` }}
    >
      <div className="flex flex-col md:h-[250px] justify-between pb-[70px] gap-[30px] pl-11 pr-11 ">
        {" "}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-semibold text-white"
        >
          Luxury cars on Rent
        </motion.h1>
        <motion.form
          initial={{ scale: 0.95, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 px-8 rounded-lg md:rounded-lg text-white w-full max-w-80 md:max-w-200 bg-[#181818] shadow-[0px_8px_20px_rgba(0,0,0,0.1)] sm:gap-4 gap-2"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
            <div className="flex flex-col items-start gap-2">
              <select
                required
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              >
                <option value="" className="bg-[#181818]">
                  Pickup Location
                </option>
                {cityList.map((city) => (
                  <option key={city} value={city} className="bg-[#181818]">
                    {city}
                  </option>
                ))}
              </select>
              <p className="px-1 text-sm text-white font-bold">
                {pickupLocation ? pickupLocation : "Please select location"}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 text-white">
              <label htmlFor="pickup-date" className="text-white">
                Pick-up Date
              </label>
              <input
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                type="date"
                id="pickup-date"
                min={new Date().toISOString().split("T")[0]}
                className="text-sm text-white [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:invert"
                required
              />
            </div>

            <div className="flex flex-col items-start gap-2 text-white">
              <label htmlFor="return-date">Return Date</label>
              <input
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                type="date"
                id="return-date"
                className="text-sm text-white [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:invert"
                required
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-6 bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] text-white rounded-lg cursor-pointer md:ml-5 "
          >
            <img
              src={assets.search_icon}
              alt="search"
              className="brightness-300"
            />
            Search
          </motion.button>
        </motion.form>
      </div>
      {/* <motion.img
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        src={assets.main_car_2}
        alt="car"
        className="h-74"
      /> */}
    </motion.div>
  );
};

export default Hero;

// import React, { useState } from "react";
// import { assets, cityList } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import Spline from "@splinetool/react-spline";

// const Hero = () => {
//   const [pickupLocation, setPickupLocation] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Array of car images - add your image paths here
//   const carImages = [
//     assets.main_car_2,
//     assets.main_car, // add more images as needed
//     assets.banner_car_image,
//   ];

//   const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } =
//     useAppContext();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     navigate(
//       "/cars?pickupLocation=" +
//         pickupLocation +
//         "&pickupDate=" +
//         pickupDate +
//         "&returnDate=" +
//         returnDate
//     );
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="h-screen flex flex-col items-center justify-center gap-14 bg-dark text-center relative"
//     >
//       <motion.h1
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="text-4xl md:text-5xl font-semibold"
//       >
//         Luxury cars on Rent
//       </motion.h1>

//       <motion.form
//         initial={{ scale: 0.95, opacity: 0, y: 50 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         onSubmit={handleSearch}
//         className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] z-10"
//       >
//         {/* Form content remains the same */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
//           <div className="flex flex-col items-start gap-2">
//             <select
//               required
//               value={pickupLocation}
//               onChange={(e) => setPickupLocation(e.target.value)}
//             >
//               <option value="">Pickup Location</option>
//               {cityList.map((city) => (
//                 <option key={city} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//             <p className="px-1 text-sm text-gray-500">
//               {pickupLocation ? pickupLocation : "Please select location"}
//             </p>
//           </div>

//           <div className="flex flex-col items-start gap-2">
//             <label htmlFor="pickup-date">Pick-up Date</label>
//             <input
//               value={pickupDate}
//               onChange={(e) => setPickupDate(e.target.value)}
//               type="date"
//               id="pickup-date"
//               min={new Date().toISOString().split("T")[0]}
//               className="text-sm text-gray-500"
//               required
//             />
//           </div>

//           <div className="flex flex-col items-start gap-2">
//             <label htmlFor="return-date">Return Date</label>
//             <input
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               type="date"
//               id="return-date"
//               className="text-sm text-gray-500"
//               required
//             />
//           </div>
//         </div>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer"
//         >
//           <img
//             src={assets.search_icon}
//             alt="search"
//             className="brightness-300"
//           />
//           Search
//         </motion.button>
//       </motion.form>

//       {/* Car Image Slider */}
//       <div className="relative w-full flex justify-center ">
//         <motion.img
//           key={currentImageIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           src={carImages[currentImageIndex]}
//           alt="car"
//           className="h-74 max-w-full"
//         />
//         {/* <Spline scene="https://prod.spline.design/vEVudt0U35MJ9LHO/scene.splinecode" /> */}
//         {/* Navigation Arrows */}
//         <button
//           onClick={prevImage}
//           className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white/50 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           onClick={nextImage}
//           className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-2 hover:bg-white/50 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 flex space-x-2">
//           {carImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-3 h-3 rounded-full ${
//                 currentImageIndex === index ? "bg-white" : "bg-white/30"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;
