import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { CircleCheckBig } from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();
  const { cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate } =
    useAppContext();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/bookings/create", {
        car: id,
        pickupDate,
        returnDate,
      });
      console.log("data:CarDetails.jsx", data);
      if (data.success) {
        toast.success(data.message);
        navigate("/my-bookings");
      } else {
        toast.error(data.message + "login required...");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setCar(cars.find((car) => car._id === id));
  }, [cars, id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 mb-23">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 text-black" />
        Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* left: Car Image and details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={car.image}
            alt=""
            className="w-[80%] h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} • {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`,
                },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.car_icon, text: car.transmission },
                { icon: assets.location_icon, text: car.location },
              ].map(({ icon, text }) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={text}
                  className="flex flex-col items-center bg-light p-4 rounded-lg text-black"
                >
                  <img src={icon} alt="" className="h-5 mb-2 text-white" />
                  {text}
                </motion.div>
              ))}
            </div>
            {/* description */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>

            {/* feature */}
            <div>
              <h1 className="text-xl font-medium mb-3 ">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "360 Camera",
                  "Bluetooth",
                  "GPS",
                  "Heated Seats",
                  "Rear View Mirror",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-500">
                    {/* <img src={assets.check_icon} className="h-4 mr-2" alt="" /> */}
                    <CircleCheckBig className="h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Booking form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="shadow-lg h-max sticky top-18 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 text-gray-500 w-full max-w-full md:max-w-[80%] lg:max-w-[400px]"
        >
          {/* Price Section */}
          <p className="flex items-center justify-between text-xl sm:text-2xl text-gray-800 font-semibold">
            {currency} {car.pricePerDay}{" "}
            <span className="text-sm sm:text-base text-gray-400 font-normal">
              per day
            </span>
          </p>

          <hr className="border-borderColor my-4 sm:my-6" />

          {/* Date Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="pickup-date" className="text-sm sm:text-base">
                Pickup Date
              </label>
              <input
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                type="date"
                className="border border-borderColor px-3 py-2 rounded-lg text-sm sm:text-base"
                required
                id="pickup-date"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="return-date" className="text-sm sm:text-base">
                Return Date
              </label>
              <input
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                type="date"
                className="border border-borderColor px-3 py-2 rounded-lg text-sm sm:text-base"
                required
                id="return-date"
              />
            </div>
          </div>

          {/* Book Button */}
          <button className="w-full bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] transition-all py-2 sm:py-3 font-medium text-white rounded-lg sm:rounded-xl cursor-pointer text-sm sm:text-base">
            Book Now
          </button>

          {/* Footer Text */}
          <p className="text-center text-xs sm:text-sm">
            No credit card required to reserve
          </p>
        </motion.form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
