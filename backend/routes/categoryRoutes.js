const express = require("express");
const router = express.Router();
const categoryValidations = require("../validations/categoryValidatons")
const Category = require("../controllers/Category")
router.post('/create-category', categoryValidations, Category.create);
module.exports = router;