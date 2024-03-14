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
    }
    if (category) {
      pipeline.push({ $match: { category: category } });
    }
    if (!searchQuery && !category) {
      const allProducts = await Product.find({}).select("name price image");
      return res.status(200).json(allProducts);
    }
    const products = await Product.aggregate(pipeline);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
const autocomplete = async (req, res, next) => {
  try {
    const searchQuery = req.query.searchQuery;
    if (searchQuery) {
      const nameResults = await Product.aggregate([
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

      const descriptionResults = await Product.aggregate([
        {
          $search: {
            index: "autocompleteProducts",
            autocomplete: {
              query: searchQuery,
              path: "description",
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

      const mergedResults = [...nameResults, ...descriptionResults];
      res.status(200).json(mergedResults);
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
