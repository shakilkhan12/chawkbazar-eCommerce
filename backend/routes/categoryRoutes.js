const express = require("express");
const router = express.Router();
const categoryValidations = require("../validations/categoryValidatons");
const Category = require("../controllers/Category");
const Authorization = require("../services/Authorization");
router.post(
  "/create-category",
  [categoryValidations, Authorization.authorized],
  Category.create
);
router.get("/categories/:page", Authorization.authorized, Category.categories);
router.get(
  "/fetch-category/:id",
  Authorization.authorized,
  Category.fetchCategory
);
router.put(
  "/update-category/:id",
  [categoryValidations, Authorization.authorized],
  Category.updateCategory
);
router.delete(
  "/delete-category/:id",
  Authorization.authorized,
  Category.deleteCategory
);
router.get("/allcategories", Category.allCategories);
router.get("/random-categories", Category.randomCategories);
module.exports = router;
