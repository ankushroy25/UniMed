import React from "react";

const ProductFilters = ({
  searchQuery,
  selectedColor,
  selectedRating,
  sortingOrder,
  selectedCategory,
  handleSearchChange,
  handleColorChange,
  handleRatingChange,
  handleSortingChange,
  handleCategoryChange,
  colorOptions,
  ratingOptions,
  categoryOptions,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* Search input field */}
      <span className="m-2 lg:mb-0 lg:mr-4">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-md"
        />
      </span>

      {/* Color filter dropdown */}
      <span className="m-2 lg:mb-0 lg:mr-4">
        <select
          value={selectedColor}
          onChange={handleColorChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="All">All Colors</option>
          {colorOptions.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </span>

      {/* Sorting filter dropdown */}
      <span className="m-2 lg:mb-0 lg:mr-4">
        <select
          value={sortingOrder}
          onChange={handleSortingChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">Sort by price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </span>

      {/* Category filter dropdown */}
      <span className="m-2 lg:mb-0 lg:mr-4">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="All">All Categories</option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </span>

      {/* Rating filter */}
      <div className="mt-2 text-white flex justify-center">
        <label>Rating </label>
        <label>
          <input
            type="radio"
            value="All"
            checked={selectedRating === "All"}
            onChange={handleRatingChange}
          />
          All
        </label>
        {ratingOptions.map((rating, index) => (
          <label key={index}>
            <input
              type="radio"
              value={rating}
              checked={selectedRating == rating}
              onChange={handleRatingChange}
              className="ml-2"
            />
            {rating}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
