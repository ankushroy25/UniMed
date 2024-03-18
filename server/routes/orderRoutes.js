const express = require("express");
const router = express.Router();
const {
  verifyIsLoggedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthToken");
const {
  getUserOrders,
  getOrder,
  createOrder,
  deleteOrder,
} = require("../controllers/orderController");

// user routes
//router.use(verifyIsLoggedIn);
router.delete("/:id", deleteOrder);
router.get("/", getUserOrders);
router.get("/user/:id", getOrder);

router.post("/", createOrder);

module.exports = router;
