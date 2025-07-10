import React from "react";
import { motion } from "motion/react";

const NewsLetter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 mt-10  bg-[#181818] min-h-[400px] text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:text-4xl text-2xl font-semibold"
      >
        Never Miss a Deal!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="md:text-lg text-white pb-8"
      >
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts
      </motion.p>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12"
      >
        <input
          className="border rounded-md h-full border-r-0 outline-none w-full  px-3 text-white"
          type="text"
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </motion.form>
    </motion.div>
  );
};

export default NewsLetter;
