const { Router } = require("express");
const Orders = require("../controllers/Orders");
const router = Router();
router.get("/orders/:page", Orders.getOrders);
module.exports = router;
