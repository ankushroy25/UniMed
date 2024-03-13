const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  cancelAppointment,
  getAppointments,
  getAppointment,
} = require("../controllers/appointmentController");
const { verifyIsLoggedIn } = require("../middleware/verifyAuthToken");
router.use(verifyIsLoggedIn);
router.get("/", getAppointments);
router.get("/:appointmentId", getAppointment);
router.post("/", bookAppointment);
router.delete("/:appointmentId", cancelAppointment);
module.exports = router;
