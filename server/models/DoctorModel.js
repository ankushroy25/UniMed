const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    chamberName: {
      type: String,
      required: true,
    },
    chamberAddress: {
      type: String,
      required: true,
    },
    schedule: [
      {
        date: Date,
        timeSlots: [
          {
            time: String,
            booked: {
              type: Boolean,
              default: false,
            },
          },
        ],
      },
    ],
    chamberCity: {
      type: String,
      required: true,
    },
    chamberState: {
      type: String,
      required: true,
    },
    chamberZipcode: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
