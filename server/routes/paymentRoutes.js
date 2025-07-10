import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import { Payment } from "../models/payment.models.js";

const router = express.Router();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: Number(amount) * 100, // Amount in smallest currency unit
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"), // Unique receipt ID
    };

    const order = await razorpayInstance.orders.create(
      options,
      (error, order) => {
        if (error) {
          console.error("Error creating Razorpay order:", error);
          return res.status(500).json({
            success: false,
            message: "Failed to create order",
            error: error.message,
          });
        }
        // console.log("Razorpay order created:", order);
        res.status(200).json({
          success: true,
          order,
        });
      }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
});

//

router.post("/verify-payment", async (req, res) => {
  const { paymentId, orderId, signature } = req.body;
  console.log("Payment verification request:", {
    paymentId,
    orderId,
    signature,
  });

  try {
    // 1. Generate the expected signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    // 2. Compare signatures securely (to prevent timing attacks)
    const isSignatureValid = crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );

    if (!isSignatureValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid signature. Payment verification failed.",
      });
    }

    // 3. Save to database (optional)
    const payment = new Payment({
      razorpay_order_id: orderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: signature,
    });
    await payment.save();

    // 4. Return success
    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.error("Error in payment verification:", error);
    return res.status(500).json({
      success: false,
      message: "Payment verification failed",
      error: error.message,
    });
  }
});

//
router.get("/get-payment", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Payment route is working",
  });
});

export default router;
