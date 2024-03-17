const express = require("express");
const router = express.Router();
const {
  getAmbulances,
  bookAmbulance,
  getBookedAmbulance,
} = require("../controllers/ambulanceController");

router.get("/", getAmbulances);
router.put("/", bookAmbulance);
router.get("/ride", getBookedAmbulance);

module.exports = router;
