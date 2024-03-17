const mongoose = require("mongoose");

const coordinatesSchema = new mongoose.Schema({
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
});

const locationSchema = new mongoose.Schema({
  coordinates: { type: coordinatesSchema, required: true },
});

const ambulanceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    location: {
      type: locationSchema,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    driverName: {
      type: String,
      required: true,
    },
    availabilityStatus: {
      type: Boolean,
      required: true,
    },
    bookedByUser: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Ambulance = mongoose.model("Ambulance", ambulanceSchema);
module.exports = Ambulance;
