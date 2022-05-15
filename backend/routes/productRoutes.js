const express = require("express");
const router = new express.Router();
const Product = require("../controllers/Product");
const Authorization = require("../services/Authorization");
const productValidations = require("../validations/productValidations");
router.post('/create-product', [Authorization.authorized, productValidations], Product.create);
module.exports = router;