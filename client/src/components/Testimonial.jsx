import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Tirth Poriya",
      location: "Himatnagar, Gujarat",
      image: assets.testimonial_image_1,
      testimonial:
        "I've rented cars from various companies, but the experience with RideMe was exceptional",
    },
    {
      name: "Abdul",
      location: "Morbi, Gujarat",
      image: assets.testimonial_image_2,
      testimonial:
        "RideMe made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic",
    },
    {
      name: "Sneh Yadav",
      location: "Gandhinagar, Gujarat",
      image: assets.testimonial_image_1,
      testimonial:
        "I highly recommend RideMe! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service.",
    },
  ];
  return (
    <div className="py-18 px-6 md:px-16 lg:px-18 xl:px-44 min-h-[400px] bg-white ">
      <Title
        title="What our customers say"
        subTitle="Discover why discerning travelers choose stayVenture for their luxury accomodations around the world."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   ">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-white/20 backdrop-blur-3xl p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star className="" fill="#0d9488" strokeWidth={0} />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
