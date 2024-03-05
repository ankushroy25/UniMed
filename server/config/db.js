const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connection SUCCESS ${con.connection.host}`.bgBlue);
  } catch (error) {
    console.error("MongoDB connection FAIL".bgRed);
    process.exit(1);
  }
};
module.exports = connectDB;
