// import React from "react";
// import { video2 } from "../assets/assets";
// const Page2 = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={video2} type="video/mp4" />
//         {/* Add fallback sources if needed */}
//         <source src="/path/to/your/video.webm" type="video/webm" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content overlay - optional */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         {/* Your content here */}
//       </div>
//     </div>
//   );
// };

// export default Page2;

//

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { video2 } from "../assets/assets";

// const Page2 = () => {
//   // Define phrases as an object with columns
//   const phraseGroups = {
//     column1: [
//       ["Book", "Ride", "Live"],
//       ["Rent", "Zoom", "Fly"],
//       ["Pick", "Ride", "Roll"],
//       ["Grab", "Ride", "Move"],
//       ["Hire", "Drive", "Explore"],
//     ],
//     column2: [
//       ["Start", "Journey", "Now"],
//       ["Book", "Fast", "Ride"],
//       ["Explore", "Travel", "Vibe"],
//     ], // Example second column; add more as needed
//   };

//   // Select column to display (e.g., column1); can be dynamic later
//   const selectedColumn = "column1";
//   const phrases = phraseGroups[selectedColumn];

//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

//   // Cycle through phrases every 10 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//     }, 10000); // Change every 10 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [phrases.length]);

//   // Define rotation angles for each word
//   const rotations = [-5, 0, 5]; // Different rotations for each word

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={video2} type="video/mp4" />
//         <source src="/path/to/your/video.webm" type="video/webm" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

//       {/* Animated Text at Bottom Center in a Column with Individual Word Rotations */}
//       <div className="absolute bottom-12 w-full flex justify-center z-20">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentPhraseIndex} // Key ensures animation triggers on phrase change
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col items-center gap-3"
//           >
//             {phrases[currentPhraseIndex].map((word, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, rotate: rotations[index] }}
//                 animate={{ opacity: 1, rotate: rotations[index] }}
//                 exit={{ opacity: 0, rotate: rotations[index] }}
//                 transition={{ duration: 0.5 }}
//                 className="flex justify-center"
//               >
//                 <h1
//                   className={`font-bold text-white uppercase ${
//                     index === 0
//                       ? "text-xl md:text-3xl"
//                       : index === 1
//                       ? "text-2xl md:text-4xl"
//                       : "text-xl md:text-3xl"
//                   }`}
//                 >
//                   {word}
//                 </h1>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Page2;

//

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { video2 } from "../assets/assets";

const Page2 = () => {
  // Define phrases as an object with columns
  const phraseGroups = {
    column1: [
      ["Book", "Drive", "Go"],
      ["Rent", "Zoom", "Fly"],
      ["Pick", "Ride", "Roll"],
      ["Grab", "Ride", "Move"],
      ["Hire", "Drive", "Explore"],
    ],
    column2: [
      ["Start", "Journey", "Now"],
      ["Book", "Fast", "Ride"],
      ["Explore", "Travel", "Vibe"],
    ], // Example second column; add more as needed
  };

  // Select column to display (e.g., column1)
  const selectedColumn = "column1";
  const phrases = phraseGroups[selectedColumn];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const navigate = useNavigate();

  // Cycle through phrases every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [phrases.length]);

  // Define rotation angles for each word
  const rotations = [-5, 0, 5]; // Different rotations for each word

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video2} type="video/mp4" />
        <source src="/path/to/your/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Animated Text and Button at Bottom Center */}
      <div className="absolute bottom-8 w-full flex flex-col items-center gap-6 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhraseIndex} // Key ensures animation triggers on phrase change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            {phrases[currentPhraseIndex].map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotate: rotations[index] }}
                animate={{ opacity: 1, rotate: rotations[index] }}
                exit={{ opacity: 0, rotate: rotations[index] }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <h1
                  className={`font-bold text-white uppercase ${
                    index === 0
                      ? "text-xl md:text-3xl"
                      : index === 1
                      ? "text-2xl md:text-4xl"
                      : "text-xl md:text-3xl"
                  }`}
                >
                  {word}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Discover Button with Right Arrow */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => navigate("/cars")}
          className="flex items-center gap-2 px-6 text-white hover:font-extrabold font-semibold uppercase rounded-lg"
        >
          Discover
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default Page2;
