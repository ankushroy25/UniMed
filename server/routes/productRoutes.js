const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  autocomplete,
} = require("../controllers/productController");

router.get("/", getProducts);
router.get("/autocomplete", autocomplete);
router.get("/get-one/:id", getProductById);

module.exports = router;
