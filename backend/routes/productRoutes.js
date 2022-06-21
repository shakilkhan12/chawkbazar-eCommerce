const express = require("express");
const router = new express.Router();
const Product = require("../controllers/Product");
const Authorization = require("../services/Authorization");
const productValidations = require("../validations/productValidations")
router.post('/create-product', [Authorization.authorized], Product.create);
router.get('/products/:page', Authorization.authorized, Product.get);
router.get('/product/:id', Authorization.authorized, Product.getProduct);
router.put('/product', [Authorization.authorized, productValidations], Product.updateProduct);
router.delete('/delete/:id', Authorization.authorized, Product.deleteProduct)
module.exports = router;