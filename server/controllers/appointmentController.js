const Appointment = require("../models/AppointmentModel.js");
const Doctor = require("../models/DoctorModel.js");
const { createEvent } = require("ics");
const nodemailer = require("nodemailer");

const { ObjectId } = require("mongoose").Types;

exports.bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, time, name, phone, message, age } = req.body;
    const email = "meghnakha18@gmail.com";
    console.log(message);
    const { _id: userId } = new ObjectId("64254517656b8f8af0a15fdc");
    //const email=req.user.email;
    // const { _id: userId } = req.user;

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    const scheduleEntry = doctor.schedule.find(
      (entry) => entry.date.toDateString() === new Date(date).toDateString()
    );

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
      patientName: name,
      patientPhone: phone,
      patientAge: age,
    });

    timeSlot.booked = true;
    await doctor.save();

    const startTime = new Date(date);
    startTime.setHours(parseInt(time.substring(0, 2)));
    startTime.setMinutes(parseInt(time.substring(3)));
    const endTime = new Date(startTime.getTime() + 30 * 60000);
    const event = {
      start: [
        startTime.getFullYear(),
        startTime.getMonth() + 1,
        startTime.getDate(),
        startTime.getHours(),
        startTime.getMinutes(),
      ],
      end: [
        endTime.getFullYear(),
        endTime.getMonth() + 1,
        endTime.getDate(),
        endTime.getHours(),
        endTime.getMinutes(),
      ],
      title: `Appointment with ${doctor.name}`,
      description: `Appointment with ${doctor.name} on ${new Date(
        date
      ).toLocaleDateString("en-UK", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })} at ${new Date(`2022-01-01T${time}`).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}`,
      organizer: { name: "UniMed", email: process.env.EMAIL },
      location: `${doctor.chamberName}, ${doctor.chamberAddress} - ${doctor.chamberZipcode}, ${doctor.chamberState}, `,
      alarms: [
        {
          action: "display",
          trigger: { hours: 0, minutes: 15, before: true },
          description:
            "You have an appointment in 15 minutes. Please don't forget to visit the doctor.",
        },
      ],
    };

    const { error, value } = createEvent(event);
    if (error) {
      throw new Error("Error generating iCalendar content");
    }
    const icsContent = value;

    const doctorName = doctor.name;
    await sendEmail(email, doctorName, icsContent);

    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const sendEmail = async (email, name, icsContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: {
        name: "UniMed",
        address: process.env.EMAIL,
      },
      to: [email],
      subject: "Appointment Confirmation",
      text: `Your appointment with ${name} has been booked.`,
      icalEvent: {
        method: "PUBLISH",
        filename: "appointment.ics",
        content: icsContent,
      },
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
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
    // const { _id: userId } = req.user;
    const { _id: userId } = new ObjectId("64254517656b8f8af0a15fdc");
    const appointments = await Appointment.find({ userId })
      .populate("doctorId", "name specialty contact")
      .sort({ date: "desc" })
      .select("-updatedAt -__v -userId -doctorId -createdAt");
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
