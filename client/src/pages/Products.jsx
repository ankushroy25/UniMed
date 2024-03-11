import React, { useContext, useState } from "react";
import data from "../data.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import { AiFillStar } from "react-icons/ai";
import ProductFilters from "../components/ProductFilters.jsx"; // Import the filter component
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [sortingOrder, setSortingOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useContext(ShopContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    setPage(0);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
    setPage(0);
  };

  const handleSortingChange = (event) => {
    setSortingOrder(event.target.value);
    setPage(0);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setPage(0);
  };

  const colorOptions = [...new Set(data.map((item) => item.color))];
  const ratingOptions = [...new Set(data.map((item) => item.rating))];
  const categoryOptions = [...new Set(data.map((item) => item.category))];

  // Function to sort the data based on price
  const sortDataByPrice = (a, b) => {
    if (sortingOrder === "lowToHigh") {
      return a.newPrice - b.newPrice;
    } else {
      return b.newPrice - a.newPrice;
    }
  };

  // Filter and sort the data
  let filteredData = data.filter(
    (item) =>
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedColor === "All" ||
        item.color.toLowerCase() === selectedColor.toLowerCase()) &&
      (selectedRating === "All" || item.rating === parseInt(selectedRating)) &&
      (selectedCategory === "All" || item.category === selectedCategory)
  );

  // Apply sorting
  filteredData = filteredData.sort(sortDataByPrice);

  const slicedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="py-8 px-16">
      <div className="py-4 mb-4 mx-auto lg:flex lg:flex-row justify-center shadow-gray-400 shadow-md bg-slate-600  rounded-md">
        <p className="text-white flex justify-center mt-3 mr-4 font-semibold text-2xl">
          Filter
        </p>

        {/* Use the ProductFilters component */}
        <ProductFilters
          searchQuery={searchQuery}
          selectedColor={selectedColor}
          selectedRating={selectedRating}
          sortingOrder={sortingOrder}
          selectedCategory={selectedCategory}
          handleSearchChange={handleSearchChange}
          handleColorChange={handleColorChange}
          handleRatingChange={handleRatingChange}
          handleSortingChange={handleSortingChange}
          handleCategoryChange={handleCategoryChange}
          colorOptions={colorOptions}
          ratingOptions={ratingOptions}
          categoryOptions={categoryOptions}
        />
      </div>

      <Grid container spacing={4}>
        {slicedData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link to={`/products/${item.id}`}>
              <div className="shadow-lg shadow-slate-500 hover:shadow-blue-800 rounded-md">
                <div className="bg-white mx-auto p-4 flex justify-center rounded-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-auto h-40"
                  />
                </div>
                <div className="bg-gray-200 p-4">
                  <Typography variant="h6" className="mt-2">
                    {item.title}
                  </Typography>
                  <div className="flex items-center mt-2">
                    {item.rating} <AiFillStar color="orange" />
                    <p className="text-gray-600 ml-2">{item.reviews}</p>
                  </div>
                  <div className="flex justify-between mt-2 text-xl ">
                    <p>
                      <span className="text-2xl font-bold text-slate-900">
                        ${item.newPrice}
                      </span>
                      <span className="text-sm text-slate-900 line-through">
                        ${item.prevPrice}
                      </span>
                    </p>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center rounded-md bg-slate-800 mr-2 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Add to cart
                      <AiOutlineShoppingCart className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30, 50]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Items per page:"
        className="bg-opacity-60 backdrop-blur-lg flex justify-center bg-blue-200 rounded-full mt-8"
      />
    </div>
  );
};

export default Products;
