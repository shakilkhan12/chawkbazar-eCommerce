const express = require("express");
const router = express.Router();
const categoryValidations = require("../validations/categoryValidatons")
const Category = require("../controllers/Category")
const Authorization = require("../services/Authorization")
router.post('/create-category', [categoryValidations, Authorization.authorized], Category.create);
module.exports = router;