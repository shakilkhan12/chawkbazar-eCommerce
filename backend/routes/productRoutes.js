const express = require("express");
const router = new express.Router();
const Product = require("../controllers/Product");
const Authorization = require("../services/Authorization");
router.post('/create-product', [Authorization.authorized], Product.create);
module.exports = router;