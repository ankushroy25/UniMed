const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["upcoming", "completed"],
      required: true,
    },

    prescription: {
      type: String,
      required: function () {
        return this.type === "completed";
      },
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
