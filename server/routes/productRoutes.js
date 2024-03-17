const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  //autocomplete,
} = require("../controllers/productController");

router.get("/", getProducts);
//router.get("/autocomplete", autocomplete);
router.get("/:id", getProductById);

module.exports = router;
