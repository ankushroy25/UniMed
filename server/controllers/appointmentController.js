const Appointment = require("../models/AppointmentModel.js");
const Doctor = require("../models/DoctorModel.js");

exports.bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, time } = req.body;
    const { _id: userId } = req.user;
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    // Finding the schedule entry for the given date
    const scheduleEntry = doctor.schedule.find(
      (entry) => entry.date.toDateString() === new Date(date).toDateString()
    );

    // if (!scheduleEntry) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Doctor's schedule for the given date is not available.",
    //   });
    // }

    // Finding the time slot in the schedule entry
    const timeSlot = scheduleEntry.timeSlots.find((slot) => slot.time === time);

    if (!timeSlot || timeSlot.booked) {
      return res.status(400).json({
        success: false,
        message: "Selected time slot is not available.",
      });
    }

    const appointment = await Appointment.create({
      userId,
      doctorId,
      date,
      time,
      type: "upcoming",
    });

    timeSlot.booked = true;
    await doctor.save();

    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.cancelAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    const doctorId = appointment.doctorId;
    const appointmentDate = appointment.date;
    const appointmentTime = appointment.time;

    // Delete the appointment
    const deletedAppointment = await Appointment.findByIdAndDelete(
      appointmentId
    );

    // Find the doctor
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    const scheduleEntry = doctor.schedule.find(
      (entry) => entry.date.toDateString() === appointmentDate.toDateString()
    );

    if (!scheduleEntry) {
      return res.status(400).json({
        success: false,
        message:
          "Doctor's schedule for the appointment's date is not available.",
      });
    }

    const timeSlot = scheduleEntry.timeSlots.find(
      (slot) => slot.time === appointmentTime
    );

    if (!timeSlot) {
      return res.status(400).json({
        success: false,
        message: "Time slot not found in the doctor's schedule.",
      });
    }

    timeSlot.booked = false;
    await doctor.save();

    res.status(200).json({ success: true, data: deletedAppointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findById(appointmentId)
      .populate(
        "doctorId",
        "name specialty contact chamberName chamberAddress chamberCity chamberState chamberZipcode"
      )
      .select("-updatedAt -__v -userId");
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.getAppointments = async (req, res) => {
  try {
    const { _id: userId } = req.user;

    const appointments = await Appointment.find({ userId })
      .populate("doctorId", "name specialty contact")
      .sort({ date: "desc" })
      .select("-updatedAt -__v -userId -doctorId -createdAt -prescription");
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
