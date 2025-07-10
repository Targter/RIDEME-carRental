import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Calendar1, MapPinCheck } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(SplitText);

const MyBookings = () => {
  const { axios, user, currency } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get("/api/bookings/user");
      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    user && fetchMyBookings();
  }, [user]);

  // Animation for booking cards
  useEffect(() => {
    if (bookings.length > 0) {
      const bookingCards = document.querySelectorAll(".booking-card");

      bookingCards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
        });
      });
    }
  }, [bookings]);

  return (
    <div className="mb-21 mt-21">
      <motion.div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 text-sm max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left mb-12">
          <h1 className="font-semibold text-4xl md:text-[40px] mb-3">
            My Bookings
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-156">
            View and manage your all car bookings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {bookings
            .filter((booking) => booking.car)
            .map((booking, index) => (
              <motion.div
                key={booking._id}
                className="booking-card relative w-full min-h-[300px] flex flex-col md:flex-row overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" }}
              >
                {/* Car Image */}
                <div className="w-full md:w-2/5 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10" />
                  <img
                    src={booking.car.image}
                    alt={`${booking.car.brand} ${booking.car.model}`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Booking Details */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                        Booking #{index + 1}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {booking.car.brand} {booking.car.model}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {booking.car.year} • {booking.car.category} •{" "}
                      {booking.car.location}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Calendar1 className="text-[#0d9488]" />
                        <div>
                          <p className="text-gray-500 text-sm">Rental Period</p>
                          <p className="font-medium">
                            {new Date(booking.pickupDate).toLocaleDateString()}{" "}
                            -{" "}
                            {new Date(booking.returnDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPinCheck className="text-[#0d9488]" />
                        <div>
                          <p className="text-gray-500 text-sm">
                            Pickup Location
                          </p>
                          <p className="font-medium">{booking.car.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Booked on</p>
                      <p className="font-medium">
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-500 text-sm">Total Price</p>
                      <p className="text-2xl font-bold text-[#0d9488]">
                        {currency} {booking.price}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {bookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <img
              src={assets.empty_icon}
              alt="No bookings"
              className="w-32 h-32 mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
            <p className="text-gray-600 max-w-md text-center">
              You haven't made any bookings yet. Start exploring our collection
              of luxury cars!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MyBookings;
