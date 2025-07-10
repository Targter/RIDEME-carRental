import React from "react";
import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Page2 from "../components/Page2";
import CarComponent from "../components/CarComponent";
import CarComponent2 from "../components/CarComponent2";
const Home = () => {
  //

  // Car data configuration
  const carData = [
    {
      id: 1,
      bgColor: "bg-[#181818]",
      textColor: "text-white",
      logo: "./sf90.avif",
      image: "./caricon.avif",
      name: "Ferrari SF90",
      side: "right",
      features: [
        "UNLEASH RAW POWER",
        "REDEFINE SPEED",
        "BOOK YOUR EXCLUSIVE RIDE",
      ],
      layout: "right", // Image on right
    },
    {
      id: 2,
      bgColor: "bg-[#000]",
      textColor: "text-[#fff]",
      logo: "./296logo.avif",
      image: "./296gtss.avif",
      name: "Ferrari 296 GTS",
      side: "left",
      features: [
        "HYBRID TECHNOLOGY",
        "OPEN-TOP THRILLS",
        "EXPERIENCE IT TODAY",
      ],
      layout: "right",
    },
    {
      id: 3,
      bgColor: "bg-white",
      textColor: "text-black",
      logo: "./bmw.png",
      image: "./bmwimage.png",
      name: "BMW M Series",
      side: "right",
      features: [
        "PRECISION ENGINEERING",
        "ULTIMATE DRIVING MACHINE",
        "SCHEDULE A TEST DRIVE",
      ],
      layout: "left",
    },

    {
      id: 4,
      bgColor: "bg-[#f5f5f5]",
      textColor: "text-[#333]",
      logo: "./911logo5.jpg",
      image: "./911carnes.avif",
      name: "Porsche 911",
      side: "left",
      features: ["ICONIC PERFORMANCE", "TIMELESS DESIGN", "RESERVE YOUR DRIVE"],
      layout: "left", // Image on left
    },
  ];

  //
  return (
    <>
      {/* <Hero2 /> */}
      <div className="flex flex-col justify-center items-center bg-[#181818] overflow-hidden">
        {" "}
        <Hero />
        <Page2></Page2>
        {carData.map((car) =>
          car.layout === "left" ? (
            <CarComponent2 key={car.id} car={car} />
          ) : (
            <CarComponent key={car.id} car={car} />
          )
        )}
        {/* <FeaturedSection /> */}
        <Banner />
        <Testimonial />
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
