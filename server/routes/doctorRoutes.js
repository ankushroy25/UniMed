const express = require("express");
const router = express.Router();
const {
  getDoctors,
  getDoctorById,
} = require("../controllers/doctorController");

router.get("/", getDoctors);

router.get("/get-one/:id", getDoctorById);

module.exports = router;
