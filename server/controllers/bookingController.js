import Booking from "../models/booking.js";
import Car from "../models/car.js";

// function to check availability of car for a given date
const checkAvailability = async (car, pickupDate, returnDate) => {
  console.log("this will caled..... in check availabile... in car controller");
  const bookings = await Booking.find({
    car,
    pickupDate: { $lte: returnDate },
    returnDate: { $gte: pickupDate },
  });
  return bookings.length === 0;
};

export const BookingOrNot = async (req, res) => {
  try {
    const { carId, pickupDate, returnDate } = req.body;
    console.log("BookingOrNot called...bookingcontroller.js");
    // 1. Validate input
    if (!carId || !pickupDate || !returnDate) {
      return res.status(400).json({
        success: false,
        message: "Please provide carId, pickupDate, and returnDate",
      });
    }

    // 2. Validate dates
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);

    if (pickup >= returnD) {
      return res.status(400).json({
        success: false,
        message: "Return date must be after pickup date",
      });
    }

    if (pickup < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Pickup date cannot be in the past",
      });
    }

    // 3. Check for overlapping bookings
    const overlappingBookings = await Booking.find({
      car: carId,
      $or: [
        {
          pickupDate: { $lte: returnD },
          returnDate: { $gte: pickup },
        },
        {
          pickupDate: { $gte: pickup, $lte: returnD },
        },
      ],
    });

    // 4. Check car exists and is active
    const carExists = await Car.findById(carId);
    console.log("carExists:", carExists);
    if (!carExists || !carExists.isAvaliable) {
      return res.status(404).json({
        success: false,
        message: "Car not found or not available for booking",
      });
    }

    // 5. Return response
    const isAvailable = overlappingBookings.length === 0;
    console.log("isAvailable:", isAvailable);
    return res.json({
      success: true,
      isAvailable,
      message: isAvailable
        ? "Car is available for the selected dates"
        : "Car is already booked for the selected dates",
      availableFrom: isAvailable ? null : overlappingBookings[0].returnDate,
      carDetails: {
        name: `${carExists.brand} ${carExists.model}`,
        pricePerDay: carExists.pricePerDay,
      },
    });
  } catch (error) {
    console.error("Availability check error:", error);
    return res.status(500).json({
      success: false,
      message: "Error checking availability",
      error: error.message,
    });
  }
};
// api to check availability of cars for the given date and location
export const checkAvailabilityOfCar = async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;
    console.log("check availability car called......bookingcontrolelr.js");
    // fetch all available cars for the given locaiton
    const cars = await Car.find({ location, isAvaliable: true });

    //check car availability for the given date range using promise
    const availableCarsPromise = cars.map(async (car) => {
      const isAvailable = await checkAvailability(
        car._id,
        pickupDate,
        returnDate
      );
      return { ...car._doc, isAvailable: isAvailable };
    });

    let availableCars = await Promise.all(availableCarsPromise);
    availableCars = availableCars.filter((car) => car.isAvailable === true);

    res.json({ success: true, availableCars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to create booking
export const createBooking = async (req, res) => {
  try {
    const { _id } = req.user;
    const { car, pickupDate, returnDate } = req.body;
    const isAvailable = await checkAvailability(car, pickupDate, returnDate);
    if (!isAvailable) {
      return res.json({ success: false, message: "Car is not Avaliable" });
    }
    console.log("booking called...create booking....");

    const carData = await Car.findById(car);

    // calculate price based on pickupdata and returndata
    const picked = new Date(pickupDate);
    const returned = new Date(returnDate);
    const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24));
    const price = carData.pricePerDay * noOfDays;

    await Booking.create({
      car,
      owner: carData.owner,
      user: _id,
      pickupDate,
      returnDate,
      price,
    });

    res.json({ success: true, message: "Booking Created" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to list user bookings
export const getUserBookings = async (req, res) => {
  try {
    const { _id } = req.user;
    const bookings = await Booking.find({ user: _id })
      .populate("car")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to get owner bookings
export const getOwnerBookings = async (req, res) => {
  try {
    if (req.user.role !== "owner") {
      return res.json({ success: false, message: "Unauthorized" });
    }
    const bookings = await Booking.find({ owner: req.user._id })
      .populate("car user")
      .select("-user.password")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// api to change booking status
export const changeBookingStatus = async (req, res) => {
  try {
    const { _id } = req.user;
    const { bookingId, status } = req.body;
    const booking = await Booking.findById(bookingId);
    if (booking.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }
    booking.status = status;
    await booking.save();
    res.json({ success: true, message: "status updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
