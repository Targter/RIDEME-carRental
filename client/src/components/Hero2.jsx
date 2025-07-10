// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Facebook,
//   Instagram,
//   MessageCircle,
//   Mail,
//   ChevronLeft,
//   ChevronRight,
//   Phone,
//   Menu,
//   X,
// } from "lucide-react";

// import { assets, cityList } from "../assets/assets";
// import { useAppContext } from "../context/AppContext";
// function Hero2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [pickupLocation, setPickupLocation] = useState("");
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   const cityList = [
//     "Miami",
//     "Orlando",
//     "Tampa",
//     "Fort Lauderdale",
//     "Key West",
//     "Naples",
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Handle search logic here
//     console.log({ pickupLocation, pickupDate, returnDate });
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     { name: "HOME" },
//     { name: "GARAGE" },
//     { name: "ABOUT US" },
//     { name: "FAQ" },
//     { name: "CONTACTS" },
//   ];

//   return (
//     <div className="min-h-screen bg-black opacity-[0.9] overflow-hidden relative">
//       {/* Orange Sidebar - Hidden on mobile */}
//       <div className="hidden md:block z-[-1] absolute left-0 top-0 w-24 h-[150px] bg-gradient-to-b from-orange-400 to-orange-400">
//         <div className="p-4 mt-8">
//           <div className="border-2 border-white w-[70px] p-2 ml-[30px] flex flex-col">
//             <div className="text-white text-lg font-bold leading-tight">
//               BOYS
//               <br />
//               TOYS
//               <br />
//               <span className="text-[10px]">Miami</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="z-10 flex items-center justify-between px-4 md:px-8 lg:px-32 py-6">
//         {/* Mobile menu button */}
//         <button className="md:hidden text-white z-30" onClick={toggleMenu}>
//           {isMenuOpen ? (
//             <X className="h-6 w-6" />
//           ) : (
//             <Menu className="h-6 w-6" />
//           )}
//         </button>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ x: -300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -300, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="fixed inset-0 z-20 w-64 bg-black bg-opacity-95 backdrop-blur-sm pt-20 px-6 md:hidden"
//             >
//               <div className="flex flex-col space-y-6">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.name}
//                     className="text-white text-xl font-medium hover:text-orange-400 transition-colors text-left py-2"
//                     onClick={toggleMenu}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//                 <div className="bg-orange-500 px-6 py-3 rounded mt-4">
//                   <div className="flex items-center space-x-2 text-white">
//                     <Phone className="h-4 w-4" />
//                     <span className="font-medium">+1 (305) 121 - 6731</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Logo for mobile - centered */}
//         <div className="md:hidden mx-auto">
//           <div className="border-2 border-white p-2 flex flex-col items-center">
//             <div className="text-white text-lg font-bold leading-tight">
//               BOYS TOYS
//               <br />
//               <span className="text-[10px]">Miami</span>
//             </div>
//           </div>
//         </div>

//         {/* Desktop Navigation - hidden on mobile */}
//         <div className="hidden md:flex items-center justify-around ml-24 w-[60%]">
//           {navItems.map((item) => (
//             <button
//               key={item.name}
//               className="text-white font-medium hover:text-orange-400 transition-colors"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>

//         {/* Phone number - hidden on small mobile, shown on larger screens */}
//         <div className="hidden sm:flex bg-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded">
//           <div className="flex items-center space-x-2 text-white">
//             <Phone className="h-4 w-4" />
//             <span className="font-medium text-sm sm:text-base">
//               +1 (305) 121 - 6731
//             </span>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content Area */}
//       <div className="flex flex-col">
//         {/* Image and Text Content */}
//         <div className="relative">
//           {/* Background Image */}
//           <div className="w-full absolute top-0 z-[-1] flex justify-end overflow-hidden">
//             <img
//               src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg"
//               alt="Luxury Mercedes AMG in Miami"
//               className="w-full md:w-[60%] h-[50vh] md:h-[85%] object-cover"
//             />
//           </div>

//           {/* Content Section */}
//           <div className="flex flex-col md:flex-row p-[40px] pb-2">
//             {/* Social Icons - hidden on mobile, shown on desktop */}
//             <div className="hidden md:flex flex-col justify-between h-[300px] pt-6 pl-8">
//               <button className="text-white hover:text-orange-200 transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </button>
//               <button className="text-white hover:text-orange-200 transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </button>
//               <button className="text-white hover:text-orange-200 transition-colors">
//                 <MessageCircle className="h-5 w-5" />
//               </button>
//               <button className="text-white hover:text-orange-200 transition-colors">
//                 <Mail className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Text Content */}
//             <div className="w-full md:w-[69%] px-4 md:px-0 mx-auto">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
//                 <div className="md:ml-12 mt-8 md:mt-0">
//                   <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-widest">
//                     LUXURY
//                     <br />
//                     LIFESTYLE
//                     <br />
//                     RENTALS
//                   </h1>

//                   <div className="mb-6 md:mb-8">
//                     <h2 className="text-xl sm:text-2xl text-white font-light mb-4 max-w-[400px]">
//                       THE AMG GLE Coupé 2018
//                     </h2>
//                     <div className="flex items-baseline space-x-2">
//                       <span className="text-2xl font-bold text-orange-400">
//                         $ 600
//                       </span>
//                       <span className="text-gray-100 opacity-[0.2] text-lg">
//                         / Per Day
//                       </span>
//                     </div>
//                   </div>

//                   <button className="border-2 border-orange-400 text-white px-6 py-3 font-semibold hover:bg-orange-400 text-sm hover:text-white transition-all duration-300 mb-8 md:mb-0">
//                     DRIVE NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pagination Dots and Navigation Arrows */}
//           <div className="absolute bottom-8 md:bottom-14 right-4 md:right-32 flex items-center space-x-4">
//             <button className="p-2 sm:p-3 text-white hover:bg-white/10 transition-colors">
//               <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
//             </button>

//             <div className="flex space-x-2">
//               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
//               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
//               <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
//             </div>

//             <button className="p-2 sm:p-3 text-white hover:bg-white/10 transition-colors">
//               <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
//             </button>
//           </div>
//         </div>

//         {/* Search Form - Now appears below on mobile */}
//         <div className="w-full mt-auto flex justify-center items-center bg-white/10 backdrop-blur-lg p-4 md:p-9 rounded-t-4xl">
//           <motion.form
//             initial={{ scale: 0.95, opacity: 0, y: 50 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             onSubmit={handleSearch}
//             className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
//           >
//             <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
//               <div className="flex flex-col items-start gap-2">
//                 <select
//                   required
//                   value={pickupLocation}
//                   onChange={(e) => setPickupLocation(e.target.value)}
//                 >
//                   <option value="">Pickup Location</option>
//                   {cityList.map((city) => (
//                     <option key={city} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//                 <p className="px-1 text-sm text-gray-500">
//                   {pickupLocation ? pickupLocation : "Please select location"}
//                 </p>
//               </div>

//               <div className="flex flex-col items-start gap-2">
//                 <label htmlFor="pickup-date">Pick-up Date</label>
//                 <input
//                   value={pickupDate}
//                   onChange={(e) => setPickupDate(e.target.value)}
//                   type="date"
//                   id="pickup-date"
//                   min={new Date().toISOString().split("T")[0]}
//                   className="text-sm text-gray-500"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col items-start gap-2">
//                 <label htmlFor="return-date">Return Date</label>
//                 <input
//                   value={returnDate}
//                   onChange={(e) => setReturnDate(e.target.value)}
//                   type="date"
//                   id="return-date"
//                   className="text-sm text-gray-500"
//                   required
//                 />
//               </div>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer"
//             >
//               <img
//                 src={assets.search_icon}
//                 alt="search"
//                 className="brightness-300"
//               />
//               Search
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero2;

import React from "react";
import { homeImagee } from "../assets/assets";

const Hero2 = () => {
  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage: `url(${homeImagee})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <nav className="h-[30px] w-full bg-none bg-[rgba(0,0,0,0)]">
        <div className="flex items-center w-[60%] justify-around bg-[rgba(0,0,0,0)] ">
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
        </div>
      </nav>
      <div className="h-screen flex flex-col items-center justify-center gap-14 text-center"></div>
    </div>
  );
};

export default Hero2;
