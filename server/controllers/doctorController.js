const Doctor = require("../models/DoctorModel");

const getDoctors = async (req, res, next) => {
  try {
    const specialty = req.query.specialty;
    const searchQuery = req.query.searchQuery;
    const aggregationPipeline = [];
    if (searchQuery) {
      const atlasSearchQuery = {
        $search: {
          index: "searchDoctors",
          text: {
            query: searchQuery,
            path: {
              wildcard: "*",
            },
            fuzzy: {},
          },
        },
      };

      aggregationPipeline.push(atlasSearchQuery);
    }

    if (specialty) {
      aggregationPipeline.push({ $match: { specialty: specialty } });
    }

    // If neither searchQuery nor specialty is provided, return all doctors
    if (!searchQuery && !specialty) {
      const allDoctors = await Doctor.find({}).select(
        "name specialty chamberAddress contact"
      );
      return res.status(200).json(allDoctors);
    }

    aggregationPipeline.push({
      $project: { name: 1, specialty: 1, chamberAddress: 1, contact: 1 },
    });
    const Doctors = await Doctor.aggregate(aggregationPipeline);
    res.status(200).json(Doctors);
  } catch (error) {
    next(error);
  }
};

const getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDoctors,
  getDoctorById,
};
Hi;
