// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { assets, dummyCarData } from "../assets/assets";
// // import Loader from "../components/Loader";
// // import { useAppContext } from "../context/AppContext";
// // import toast from "react-hot-toast";
// // import { color, motion } from "motion/react";
// // import { CircleCheckBig } from "lucide-react";

// // const CarDetails = () => {
// //   const { id } = useParams();
// //   const { cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate } =
// //     useAppContext();
// //   // console.log("cars:", cars);
// //   // const { cars, axios } = useAppContext();
// //   const navigate = useNavigate();
// //   const [car, setCar] = useState(null);
// //   console.log("car:", car);
// //   // const [pickupDate, setPickupDate] = useState("");
// //   const currency = import.meta.env.VITE_CURRENCY;

// //   // check availability

// //   const searchCarAvailability = async () => {
// //     // console.log("location:", pickupDate, pickupLocation, returnDate);
// //     const { data } = await axios.post("/api/bookings/bookingAvailable", {
// //       location: car?.location,
// //       pickupDate,
// //       returnDate,
// //     });
// //     console.log("Availability data:", data);
// //     if (data.success) {
// //       // setFilteredCars(data.availableCars);
// //       if (data.availableCars.length === 0) {
// //         toast("No cars available");
// //         return;
// //       }
// //       return null;
// //     }
// //   };

// //
// //   // console.log("car:", car?.pricePerDay);
// //   // console.log("dataKey:", import.meta.env.VITE_RAZORPAY_KEY_ID);
// //   //
// //   const PaymentButton = async (e) => {
// //     e.preventDefault();
// //     // console.log("payment cAleld");
// //     try {
// //       const res = await axios.post(`/api/payment/create-order`, {
// //         amount: car?.pricePerDay,
// //       });
// //       // console.log("ersponsData after payment:", res.data);
// //       if (res.data.success) {
// //         handlePaymentVerify(res.data.order);
// //       } else {
// //         toast.error("Failed to create payment order.");
// //       }
// //     } catch (error) {
// //       // console.log("error While Payment:", error);
// //     }
// //   };

// //   //
// //   const handlePaymentVerify = async (data) => {
// //     const options = {
// //       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
// //       amount: data.amount,
// //       currency: data.currency,
// //       name: "RideMe",
// //       description: "Payment for booking",
// //       order_id: data.id,
// //       handler: async (response) => {
// //         try {
// //           const res = await axios.post("/api/payment/verify-payment", {
// //             paymentId: response.razorpay_payment_id,
// //             orderId: response.razorpay_order_id,
// //             signature: response.razorpay_signature,
// //           });
// //           // console.log("Payment verification response:", res.data);
// //           if (res.data.success) {
// //             toast.success("Payment successful!");
// //             handleSubmit();
// //           } else {
// //             toast.error("Payment verification failed.");
// //           }
// //         } catch (error) {
// //           console.error("Error verifying payment:", error);
// //           toast.error("Error verifying payment.");
// //         }
// //       },
// //       theme: {
// //         color: "#0d9488",
// //       },
// //     };
// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   //
// //   useEffect(() => {
// //     setCar(cars.find((car) => car._id === id));
// //   }, [cars, id]);

// //   return car ? (
// //     <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 mb-23">
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="flex items-center gap-2 mb-6 cursor-pointer"
// //       >
// //         <img src={assets.arrow_icon} alt="" className="rotate-180 text-black" />
// //         Back to all cars
// //       </button>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
// //         {/* left: Car Image and details */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="lg:col-span-2"
// //         >
// //           <motion.img
// //             initial={{ opacity: 0, scale: 0.98 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5 }}
// //             src={car.image}
// //             alt=""
// //             className="w-[80%] h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
// //           />
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             className="space-y-6"
// //           >
// //             <div>
// //               <h1 className="text-3xl font-bold">
// //                 {car.brand} {car.model}
// //               </h1>
// //               <p className="text-gray-500 text-lg">
// //                 {car.category} • {car.year}
// //               </p>
// //             </div>
// //             <hr className="border-borderColor my-6" />

// //             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
// //               {[
// //                 {
// //                   icon: assets.users_icon,
// //                   text: `${car.seating_capacity} Seats`,
// //                 },
// //                 { icon: assets.fuel_icon, text: car.fuel_type },
// //                 { icon: assets.car_icon, text: car.transmission },
// //                 { icon: assets.location_icon, text: car.location },
// //               ].map(({ icon, text }) => (
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 10 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   transition={{ duration: 0.4 }}
// //                   key={text}
// //                   className="flex flex-col items-center bg-light p-4 rounded-lg text-black"
// //                 >
// //                   <img src={icon} alt="" className="h-5 mb-2 text-white" />
// //                   {text}
// //                 </motion.div>
// //               ))}
// //             </div>
// //             {/* description */}
// //             <div>
// //               <h1 className="text-xl font-medium mb-3">Description</h1>
// //               <p className="text-gray-500">{car.description}</p>
// //             </div>

// //             {/* feature */}
// //             <div>
// //               <h1 className="text-xl font-medium mb-3 ">Features</h1>
// //               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
// //                 {[
// //                   "360 Camera",
// //                   "Bluetooth",
// //                   "GPS",
// //                   "Heated Seats",
// //                   "Rear View Mirror",
// //                 ].map((item) => (
// //                   <li key={item} className="flex items-center text-gray-500">
// //                     {/* <img src={assets.check_icon} className="h-4 mr-2" alt="" /> */}
// //                     <CircleCheckBig className="h-4 mr-2" />
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </motion.div>
// //         </motion.div>

// //         {/* Right: Booking form */}
// //         <motion.form
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.3 }}
// //           onSubmit={PaymentButton}
// //           className="shadow-lg h-max sticky top-18 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 text-gray-500 w-full max-w-full md:max-w-[80%] lg:max-w-[400px]"
// //         >
// //           {/* Price Section */}
// //           <p className="flex items-center justify-between text-xl sm:text-2xl text-gray-800 font-semibold">
// //             {currency} {car.pricePerDay}{" "}
// //             <span className="text-sm sm:text-base text-gray-400 font-normal">
// //               per day
// //             </span>
// //           </p>

// //           <hr className="border-borderColor my-4 sm:my-6" />

// //           {/* Date Inputs */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //             <div className="flex flex-col gap-2">
// //               <label htmlFor="pickup-date" className="text-sm sm:text-base">
// //                 Pickup Date
// //               </label>
// //               <input
// //                 value={pickupDate}
// //                 onChange={(e) => setPickupDate(e.target.value)}
// //                 type="date"
// //                 className="border border-borderColor px-3 py-2 rounded-lg text-sm sm:text-base"
// //                 required
// //                 id="pickup-date"
// //                 min={new Date().toISOString().split("T")[0]}
// //               />
// //             </div>

// //             <div className="flex flex-col gap-2">
// //               <label htmlFor="return-date" className="text-sm sm:text-base">
// //                 Return Date
// //               </label>
// //               <input
// //                 value={returnDate}
// //                 onChange={(e) => setReturnDate(e.target.value)}
// //                 type="date"
// //                 className="border border-borderColor px-3 py-2 rounded-lg text-sm sm:text-base"
// //                 required
// //                 id="return-date"
// //               />
// //             </div>
// //           </div>

// //           {/* Book Button */}
// //           <button className="w-full bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] transition-all py-2 sm:py-3 font-medium text-white rounded-lg sm:rounded-xl cursor-pointer text-sm sm:text-base">
// //             Book Now
// //           </button>

// //           {/* Footer Text */}
// //           <p className="text-center text-xs sm:text-sm">
// //             No credit card required to reserve
// //           </p>
// //         </motion.form>
// //       </div>
// //     </div>
// //   ) : (
// //     <Loader />
// //   );
// // };

// // export default CarDetails;

// //

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";
// import Loader from "../components/Loader";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";
// import { CircleCheckBig } from "lucide-react";

// const CarDetails = () => {
//   const { id } = useParams();
//   const { cars, axios, user } = useAppContext();
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [isAvailable, setIsAvailable] = useState(false);
//   const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
//   const [pickupDate, setPickupDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const currency = import.meta.env.VITE_CURRENCY;

//   // Check availability when dates change
//   useEffect(() => {
//     if (pickupDate && returnDate && car) {
//       checkCarAvailability();
//     } else {
//       setIsAvailable(false);
//     }
//   }, [pickupDate, returnDate, car]);

//   const checkCarAvailability = async () => {
//     if (!pickupDate || !returnDate) return;

//     setIsCheckingAvailability(true);
//     try {
//       const { data } = await axios.post("/api/bookings/bookingAvailable", {
//         carId: car._id,
//         pickupDate,
//         returnDate,
//       });
//       console.log("Availability data:", data);
//       if (data.success) {
//         setIsAvailable(data.isAvailable);
//         if (!data.isAvailable) {
//           toast.error(data.message || "Car not available for selected dates");
//         }
//       } else {
//         toast.error(data.message || "Error checking availability");
//         setIsAvailable(false);
//       }
//     } catch (error) {
//       toast.error("Error checking availability");
//       console.error("Availability check error:", error);
//       setIsAvailable(false);
//     } finally {
//       setIsCheckingAvailability(false);
//     }
//   };

//   const calculateTotalAmount = () => {
//     if (!pickupDate || !returnDate) return 0;

//     const start = new Date(pickupDate);
//     const end = new Date(returnDate);
//     const diffTime = Math.max(end - start, 0);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

//     return diffDays * car.pricePerDay;
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!isAvailable) {
//       toast.error("Car is not available for the selected dates");
//       return;
//     }

//     if (!pickupDate || !returnDate) {
//       toast.error("Please select both pickup and return dates");
//       return;
//     }

//     try {
//       const totalAmount = calculateTotalAmount();
//       const { data } = await axios.post("/api/payment/create-order", {
//         amount: totalAmount,
//         carId: car._id,
//         pickupDate,
//         returnDate,
//       });

//       if (data.success) {
//         const options = {
//           key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//           amount: data.order.amount,
//           currency: data.order.currency,
//           name: "Your Car Rental",
//           description: `Booking for ${car.brand} ${car.model}`,
//           order_id: data.order.id,
//           handler: async (response) => {
//             try {
//               const verification = await axios.post(
//                 "/api/payment/verify-payment",
//                 {
//                   paymentId: response.razorpay_payment_id,
//                   orderId: response.razorpay_order_id,
//                   signature: response.razorpay_signature,
//                   bookingDetails: {
//                     carId: car._id,
//                     pickupDate,
//                     returnDate,
//                     totalAmount,
//                   },
//                 }
//               );

//               if (verification.data.success) {
//                 toast.success("Booking confirmed!");
//                 navigate("/my-bookings");
//               } else {
//                 toast.error("Payment verification failed");
//               }
//             } catch (error) {
//               toast.error("Error verifying payment");
//               console.error("Verification error:", error);
//             }
//           },
//           theme: { color: "#0d9488" },
//           prefill: {
//             name: user?.name || "Customer",
//             email: user?.email || "customer@example.com",
//             contact: user?.phone || "9999999999",
//           },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.on("payment.failed", (response) => {
//           toast.error(`Payment failed: ${response.error.description}`);
//           console.error("Payment failed:", response.error);
//         });
//         rzp.open();
//       } else {
//         toast.error(data.message || "Failed to create payment order");
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Payment initialization failed"
//       );
//       console.error("Payment error:", error);
//     }
//   };

//   useEffect(() => {
//     setCar(cars.find((car) => car._id === id));
//   }, [cars, id]);

//   if (!car) return <Loader />;

//   return (
//     <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 mb-23">
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 cursor-pointer"
//       >
//         <img src={assets.arrow_icon} alt="" className="rotate-180 text-black" />
//         Back to all cars
//       </button>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//         {/* Left: Car Image and details */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="lg:col-span-2"
//         >
//           <motion.img
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             src={car.image}
//             alt=""
//             className="w-[80%] h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
//           />

//           {/* Car details (same as before) */}
//           {/* ... */}
//         </motion.div>

//         {/* Right: Booking form */}
//         <motion.form
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           onSubmit={handlePayment}
//           className="shadow-lg h-max sticky top-18 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 text-gray-500 w-full max-w-full md:max-w-[80%] lg:max-w-[400px]"
//         >
//           {/* Price Section */}
//           <div>
//             <p className="flex items-center justify-between text-xl sm:text-2xl text-gray-800 font-semibold">
//               {currency} {car.pricePerDay}{" "}
//               <span className="text-sm sm:text-base text-gray-400 font-normal">
//                 per day
//               </span>
//             </p>

//             {pickupDate && returnDate && (
//               <p className="mt-2 text-right text-sm">
//                 Total for{" "}
//                 {Math.ceil(
//                   (new Date(returnDate) - new Date(pickupDate)) /
//                     (1000 * 60 * 60 * 24)
//                 )}{" "}
//                 days:{" "}
//                 <span className="font-semibold">
//                   {currency} {calculateTotalAmount()}
//                 </span>
//               </p>
//             )}
//           </div>

//           <hr className="border-borderColor my-4 sm:my-6" />

//           {/* Date Inputs */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="flex flex-col gap-2">
//               <label htmlFor="pickup-date" className="text-sm sm:text-base">
//                 Pickup Date
//               </label>
//               <input
//                 value={pickupDate}
//                 onChange={(e) => setPickupDate(e.target.value)}
//                 type="date"
//                 className="border border-borderColor px-3 py-2 rounded-lg text-sm sm:text-base"
//                 required
//                 id="pickup-date"
//                 min={new Date().toISOString().split("T")[0]}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label htmlFor="return-date" className="text-sm sm:text-base">
//                 Return Date
//               </label>
//               <input
//                 value={returnDate}
//                 onChange={(e) => setReturnDate(e.target.value)}
//                 type="date"
//                 className="border border-borderColor px-3 py-2 rounded-lg text-sm sm:text-base"
//                 required
//                 id="return-date"
//                 min={pickupDate || new Date().toISOString().split("T")[0]}
//               />
//             </div>
//           </div>

//           {/* Availability Status */}
//           {isCheckingAvailability ? (
//             <p className="text-sm text-center">Checking availability...</p>
//           ) : pickupDate && returnDate ? (
//             <p
//               className={`text-sm text-center ${
//                 isAvailable ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {isAvailable
//                 ? "Car is available!"
//                 : "Car is not available for these dates"}
//             </p>
//           ) : null}

//           {/* Book Button */}
//           <button
//             type="submit"
//             className={`w-full bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] transition-all py-2 sm:py-3 font-medium text-white rounded-lg sm:rounded-xl cursor-pointer text-sm sm:text-base ${
//               !isAvailable ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={!isAvailable || isCheckingAvailability}
//           >
//             {isCheckingAvailability ? "Processing..." : "Book Now"}
//           </button>

//           <p className="text-center text-xs sm:text-sm">
//             No credit card required to reserve
//           </p>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;

//

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { CircleCheckBig, Users, Fuel, Car, MapPin } from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();
  const { cars, axios, user } = useAppContext();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const currency = import.meta.env.VITE_CURRENCY;

  // Load car and check availability
  useEffect(() => {
    setCar(cars.find((car) => car._id === id));
  }, [cars, id]);

  useEffect(() => {
    if (pickupDate && returnDate && car) {
      checkCarAvailability();
    } else {
      setIsAvailable(false);
    }
  }, [pickupDate, returnDate, car]);

  // create booking
  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const { data } = await axios.post("/api/bookings/create", {
        car: id,
        pickupDate,
        returnDate,
      });
      // console.log("data:CarDetails.jsx", data);
      if (data.success) {
        toast.success(data.message);
        // console.log("data:", data);
        navigate("/my-bookings");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkCarAvailability = async () => {
    setIsCheckingAvailability(true);
    try {
      const { data } = await axios.post("/api/bookings/bookingAvailable", {
        carId: car._id,
        pickupDate,
        returnDate,
      });

      setIsAvailable(data.isAvailable);
      if (!data.isAvailable) {
        toast.error(data.message || "Car not available for selected dates");
      }
    } catch (error) {
      toast.error("Error checking availability");
      console.error("Availability check error:", error);
      setIsAvailable(false);
    } finally {
      setIsCheckingAvailability(false);
    }
  };

  const calculateTotalAmount = () => {
    if (!pickupDate || !returnDate) return 0;

    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;
    return diffDays * car.pricePerDay;
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!isAvailable) {
      toast.error("Car is not available for the selected dates");
      return;
    }

    try {
      const totalAmount = calculateTotalAmount();
      const { data } = await axios.post("/api/payment/create-order", {
        amount: totalAmount,
        carId: car._id,
        pickupDate,
        returnDate,
      });

      if (data.success) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: data.order.amount,
          currency: data.order.currency,
          name: "RideMe Rentals",
          description: `Booking for ${car.brand} ${car.model}`,
          order_id: data.order.id,
          handler: async (response) => {
            try {
              const verification = await axios.post(
                "/api/payment/verify-payment",
                {
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  signature: response.razorpay_signature,
                  bookingDetails: {
                    carId: car._id,
                    pickupDate,
                    returnDate,
                    totalAmount,
                  },
                }
              );

              if (verification.data.success) {
                toast.success("Booking confirmed!");
                handleSubmit();
              } else {
                toast.error("Payment verification failed");
              }
            } catch (error) {
              toast.error("Error verifying payment");
              console.error("Verification error:", error);
            }
          },
          theme: { color: "#0d9488" },
          prefill: {
            name: user?.name || "Customer",
            email: user?.email || "customer@example.com",
            contact: user?.phone || "9999999999",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", (response) => {
          toast.error(`Payment failed: ${response.error.description}`);
        });
        rzp.open();
      } else {
        toast.error(data.message || "Failed to create payment order");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Payment initialization failed"
      );
      console.error("Payment error:", error);
    }
  };

  if (!car) return <Loader />;

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 mb-23">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 text-black" />
        Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Car Image and details */}
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
            alt={`${car.brand} ${car.model}`}
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
                  icon: <Users className="h-5 w-5" />,
                  text: `${car.seating_capacity} Seats`,
                },
                { icon: <Fuel className="h-5 w-5" />, text: car.fuel_type },
                { icon: <Car className="h-5 w-5" />, text: car.transmission },
                { icon: <MapPin className="h-5 w-5" />, text: car.location },
              ].map(({ icon, text }) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={text}
                  className="flex flex-col items-center bg-light p-4 rounded-lg text-black"
                >
                  {icon}
                  <span className="mt-2">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h1 className="text-xl font-medium mb-3">Description</h1>
              <p className="text-gray-500">
                {car.description || "No description available"}
              </p>
            </div>

            {/* Features */}
            <div>
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {car.features?.length > 0 ? (
                  car.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-500"
                    >
                      <CircleCheckBig className="h-4 mr-2" />
                      {feature}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No features listed</p>
                )}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Booking form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handlePayment}
          className="shadow-lg h-max sticky top-18 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 text-gray-500 w-full max-w-full md:max-w-[80%] lg:max-w-[400px]"
        >
          {/* Price Section */}
          <div>
            <p className="flex items-center justify-between text-xl sm:text-2xl text-gray-800 font-semibold">
              {currency} {car.pricePerDay}{" "}
              <span className="text-sm sm:text-base text-gray-400 font-normal">
                per day
              </span>
            </p>

            {pickupDate && returnDate && (
              <p className="mt-2 text-right text-sm">
                Total for{" "}
                {Math.ceil(
                  (new Date(returnDate) - new Date(pickupDate)) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                days:{" "}
                <span className="font-semibold">
                  {currency} {calculateTotalAmount()}
                </span>
              </p>
            )}
          </div>

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
                min={pickupDate || new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>

          {/* Availability Status */}
          {isCheckingAvailability ? (
            <p className="text-sm text-center">Checking availability...</p>
          ) : pickupDate && returnDate ? (
            <p
              className={`text-sm text-center ${
                isAvailable ? "text-green-600" : "text-red-600"
              }`}
            >
              {isAvailable
                ? "Car is available!"
                : "Car is not available for these dates"}
            </p>
          ) : null}

          {/* Book Button */}
          <button
            type="submit"
            className={`w-full bg-[#0d9488] hover:bg-[rgba(13,148,136,0.9)] transition-all py-2 sm:py-3 font-medium text-white rounded-lg sm:rounded-xl cursor-pointer text-sm sm:text-base ${
              !isAvailable ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isAvailable || isCheckingAvailability}
          >
            {isCheckingAvailability ? "Processing..." : "Book Now"}
          </button>

          <p className="text-center text-xs sm:text-sm">
            No credit card required to reserve
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default CarDetails;
