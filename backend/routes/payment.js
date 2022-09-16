const express = require("express");
const PaymentController = require("../controllers/PaymentController");
const router = express.Router();
router.post("/create-checkout-session", PaymentController.paymentProcess);
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  PaymentController.checkOutSession
);
router.get("/verify-payment/:id", PaymentController.paymentVerify);
module.exports = router;
