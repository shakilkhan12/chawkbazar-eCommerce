const { Router } = require("express");
const PaymentController = require("../controllers/PaymentController");
const router = Router();
router.post("/create-checkout-session", PaymentController.paymentProcess);
module.exports = router;
