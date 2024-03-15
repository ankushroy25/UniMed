const Doctor = require("../models/DoctorModel");

const getDoctors = async (req, res, next) => {
  try {
    const specialty = req.query.specialty;
    const searchQuery = req.query.searchQuery;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    let totalPages = 0;

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
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      };

      aggregationPipeline.push(atlasSearchQuery);
    }

    if (specialty) {
      aggregationPipeline.push({ $match: { specialty: specialty } });
    }

    if (!searchQuery && !specialty) {
      totalPages = Math.ceil((await Doctor.countDocuments()) / limit);
      const allDoctors = await Doctor.find({})
        .select("name specialty chamberAddress contact profileImage")
        .skip((page - 1) * limit)
        .limit(limit);
      return res.status(200).json({ doctors: allDoctors, totalPages });
    }

    aggregationPipeline.push({
      $project: {
        name: 1,
        specialty: 1,
        chamberAddress: 1,
        contact: 1,
        profileImage: 1,
      },
    });
    aggregationPipeline.push({ $skip: (page - 1) * limit });
    aggregationPipeline.push({ $limit: limit });
    const doctors = await Doctor.aggregate(aggregationPipeline);

    const totalDoctorsCount = await Doctor.aggregate([
      ...aggregationPipeline,
      { $count: "total" },
    ]);

    if (totalDoctorsCount.length > 0) {
      totalPages = Math.ceil(totalDoctorsCount[0].total / limit);
    } else {
      totalPages = 0;
    }
    res.status(200).json({ doctors: doctors, totalPages });
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
