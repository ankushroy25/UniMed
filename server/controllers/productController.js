const Product = require("../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    const category = req.query.category;
    const searchQuery = req.query.searchQuery;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const pipeline = [];
    let totalPages = 0;
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

      pipeline.push(atlasSearchQuery);
    }
    if (category) {
      pipeline.push({ $match: { category: category } });
    }
    if (!searchQuery && !category) {
      totalPages = Math.ceil((await Product.countDocuments()) / limit);
      const allProducts = await Product.find({})
        .select("name price image")
        .skip((page - 1) * limit)
        .limit(limit);
      return res.status(200).json({ products: allProducts, totalPages });
    }
    pipeline.push({ $skip: (page - 1) * limit });
    pipeline.push({ $limit: limit });

    const products = await Product.aggregate(pipeline);

    
    const totalProductsCount = await Product.aggregate([
      ...pipeline,
      { $count: "total" },
    ]);
    totalPages = Math.ceil(totalProductsCount[0].total / limit);
    res.status(200).json({ products, totalPages });
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
