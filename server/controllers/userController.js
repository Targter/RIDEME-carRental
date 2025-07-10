import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Car from "../models/car.js";

// generate jwt token
const generateToken = (userId) => {
  const payload = userId;
  return jwt.sign(payload, process.env.JWT_SECRET);
};

// register user
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("this called....");

    if (!name || !email || !password || password.length < 8) {
      return res.json({ success: false, message: "Fill all the fields" });
    }

    console.log("this will exist in teh database:");
    const userExists = await User.findOne({ email });
    console.log("this will exist in teh database:");
    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(user._id.toString());
    console.log("this will exist in teh database:");
    res.json({ success: true, token });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = generateToken(user._id.toString());
    res.json({ success: true, token });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// get user data using token (JWT)
export const getUserData = async (req, res) => {
  try {
    const { user } = req;
    res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// get all cars for the frontend
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({ isAvaliable: true });
    res.json({ success: true, cars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
