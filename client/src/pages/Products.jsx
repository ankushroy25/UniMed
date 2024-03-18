import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import axios from "axios";
import Spinner from "../components/Spinner";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const categories = [
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
  ];

  const fetchProducts = async () => {
    try {
      let url = "/api/products?page=" + currentPage;

      if (searchQuery && searchQuery.length > 3) {
        const searchQuery1 = encodeURIComponent(searchQuery);
        url += "&searchQuery=" + searchQuery1;
      }

      if (selectedCategory) {
        url += "&category=" + selectedCategory;
      }

      const response = await axios.get(url);
      if (response.status === 200) {
        const { products, totalPages } = response.data;

        setProducts(products);
        setTotalPages(totalPages);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, searchQuery, selectedCategory]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  return (
    <div className="py-8 px-16 min-h-[700px] flex flex-col justify-between">
      <div>
        <div className="py-4 mb-4 mx-auto lg:flex lg:flex-row justify-center shadow-gray-400 shadow-md bg-slate-600 rounded-md">
          <div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products"
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>

              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <Spinner /> // Show spinner if loading
        ) : products.length === 0 ? (
          <Alert severity="info">No medicines found</Alert>
        ) : (
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Link to={`/products/${product._id}`}>
                  <div className="h-full shadow-lg shadow-slate-500 hover:shadow-gray-700 rounded-md flex flex-col ">
                    <div className="bg-white mx-auto p-2 flex justify-center rounded-t-lg overflow-hidden w-full ">
                      <img
                        src={`/api/images/${product.images[0].path}`}
                        alt={product.name}
                        className="w-full h-40 object-cover min-h-[260px] "
                      />
                    </div>
                    <div className="bg-gray-200 p-4 flex-grow flex flex-col justify-between rounded-md">
                      <div>
                        <Typography variant="h6" className="mt-2">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          {product.category}
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          &#8377; {product.price}.00 /unit
                        </Typography>
                      </div>
                      <Typography variant="body2" className="text-gray-600">
                        {product.description}
                      </Typography>
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l-md focus:outline-none"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
