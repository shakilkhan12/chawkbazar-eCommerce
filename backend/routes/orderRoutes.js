const { Router } = require("express");
const Orders = require("../controllers/Orders");
const Authorization = require("../services/Authorization");
const ratingValidations = require("../validations/ratingValidations");
const router = Router();
router.get("/orders", Authorization.authorized, Orders.getOrders);
router.get("/order-details/:id", Authorization.authorized, Orders.orderDetails);
router.put("/order-update", Authorization.authorized, Orders.updateOrder);
router.post(
  "/add-review",
  [Authorization.authorized, ratingValidations],
  Orders.createRating
);
module.exports = router;
