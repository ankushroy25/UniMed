const Ambulance = require("../models/AmbulanceModel.js");

const getAmbulances = async (req, res, next) => {
  try {
    const ambulances = await Ambulance.find({ availabilityStatus: true });
    return res.json(ambulances);
  } catch (err) {
    next(err);
  }
};

const bookAmbulance = async (req, res, next) => {
  try {
    console.log(req.body);
    const ambulanceID = req.body.id;
    const user = req.body.userEmail;
    const updatedAmbulance = await Ambulance.findOneAndUpdate(
      { _id: ambulanceID },
      { availabilityStatus: false, bookedByUser: user },
      { new: true }
    );

    if (!updatedAmbulance) {
      return res.status(404).json({ message: "Ambulance not found" });
    }

    return res.json(updatedAmbulance);
  } catch (err) {
    next(err);
  }
};

const getBookedAmbulance = async (req, res, next) => {
  try {
    const user = req.query.email;
    const bookedAmbulance = await Ambulance.find({ bookedByUser: user });

    console.log(bookedAmbulance);
    if (bookedAmbulance.length === 0) {
      return res.status(404).json({ message: "No ambulance booked" });
    }

    return res.json(bookedAmbulance);
  } catch (err) {
    next(err);
  }
};
module.exports = { getAmbulances, bookAmbulance, getBookedAmbulance };
