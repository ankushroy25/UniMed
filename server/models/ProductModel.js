const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Antibiotics",
        "Analgesics",
        "Antipyretics",
        "Antiseptics",
        "Antivirals",
        "Antifungals",
        "Antacids",
        "Anti-inflammatory drugs",
        "Anticoagulants",
        "Antidepressants",
        "Anticonvulsants",
        "Antihistamines",
        "Antihypertensive drugs",
        "Bronchodilators",
        "Diuretics",
        "Hormonal drugs",
        "Immunosuppressants",
        "Muscle relaxants",
        "Sedatives",
        "Stimulants",
        "Vaccines",
      ],
    },
    // count: {
    //   type: Number,
    //   required: true,
    // },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },

    images: [imageSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
