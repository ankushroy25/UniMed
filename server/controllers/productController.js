const Product = require("../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    const category = req.query.category;
    const searchQuery = req.query.searchQuery;
    const pipeline = [];
    if (searchQuery) {
      const atlasSearchQuery = {
        $search: {
          index: "searchMedicines",
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
      if (category) {
        pipeline.push({ $match: { category: category } });
      }
      const products = await Product.aggregate(pipeline);
      res.status(200).json(products);
    }
  } catch (error) {
    next(error);
  }
};
const autocomplete = async (req, res, next) => {
  try {
    const searchQuery = req.query.searchQuery;
    if (searchQuery) {
      const products = await Product.aggregate([
        {
          $search: {
            index: "autocompleteProducts",
            autocomplete: {
              query: searchQuery,
              path: "name",
              tokenOrder: "sequential",
            },
          },
        },

        {
          $project: {
            _id: 0,
            name: 1,
          },
        },
      ]);
      res.status(200).json(products);
    }
  } catch (error) {
    next(error);
  }
};
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProducts,
  autocomplete,
  getProductById,
};
