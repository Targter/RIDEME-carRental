import express from 'express'
import "dotenv/config";
import cors from "cors";
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

//initialize express app
const app = express()

await connectDB()

//middleware
app.use(cors())
app.use(express.json());

app.get('/', (req, res)=> res.send("Server is running"))
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))