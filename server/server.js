import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";
//initialize express app
const app = express();

await connectDB();
const PORT = process.env.PORT || 5000;
const FRONTENDURL = "http://localhost:5173" || process.env.FRONTENDURL;
console.log("frontendUrL:", FRONTENDURL);
//middleware
app.use(
  cors({
    origin: FRONTENDURL,
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/payment", paymentRouter);
// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
