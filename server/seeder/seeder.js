require("dotenv").config();
const connectDB = require("../config/db");
connectDB();

// const categoryData = require("./categories");
const productData = require("./products");
// const reviewData = require("./reviews");
// const userData = require("./users");
// const orderData = require("./orders");
//const doctorsData = require("./doctors");

// const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel");
// const Review = require("../models/ReviewModel");
// const User = require("../models/UserModel");
// const Order = require("../models/OrderModel");
//const Doctor = require("../models/DoctorModel");

const importData = async () => {
  try {
    // await Category.collection.dropIndexes();
    // await Product.collection.dropIndexes();

    //await Doctor.collection.deleteMany({});
    // await Category.collection.deleteMany({});
    // await Product.collection.deleteMany({});
    // await Review.collection.deleteMany({});
    // await User.collection.deleteMany({});
    // await Order.collection.deleteMany({});

    if (process.argv[2] !== "-d") {
      // await Category.insertMany(categoryData);
      //await Doctor.insertMany(doctorsData);
      // const reviews = await Review.insertMany(reviewData);
      // const sampleProducts = productData.map((product) => {
      //   reviews.map((review) => {
      //     product.reviews.push(review._id);
      //   });
      //   return { ...product };
      // });
      await Product.insertMany(productData);
      // await User.insertMany(userData);
      // await Order.insertMany(orderData);

      console.log("Seeder data imported successfully");
      process.exit();
      return;
    }
    console.log("Seeder data deleted successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();
