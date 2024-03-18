import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import Spinner from "../components/Spinner.jsx";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({ productId: product._id, price: product.price, quantity })
    );
    setAddedToCart(true);
    toast.success("Added to cart!");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        if (response.status === 200) {
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Spinner />
      </div>
    );
  }

  // Calculate discounted price
  const discountedPrice = product.price * (1 - 0.1);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div>
          <div className="flex justify-center mb-4 lg:mb-0">
            <img
              src={`/api/images/${product.images[0].path}`}
              alt={product.name}
              className="w-[450px] h-[390px] lg:w-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={`/api/images/${image.path}`}
                alt={product.name}
                className="w-20 h-auto object-cover cursor-pointer rounded-lg shadow-sm hover:shadow-md"
                onClick={() => {
                  const updatedImages = [...product.images];
                  [updatedImages[0], updatedImages[index + 1]] = [
                    updatedImages[index + 1],
                    updatedImages[0],
                  ];
                  setProduct({ ...product, images: updatedImages });
                }}
              />
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
          {/* <p className="text-gray-700 mb-2 text-2xl font-semibold">
            ₹{product.price}
          </p> */}

          <p className="text-gray-700 mb-2">Inclusive of all taxes</p>
          <p className="text-gray-700 mb-4">
            Delivery by Today, before 10:00 pm
          </p>
          <p className="bg-red-500 text-white text-lg font-bold py-1 px-2 rounded mb-2 inline-block">
            Discount: 10% off
          </p>
          <p className="text-lg text-gray-800 mb-4">
            <span className="line-through text-lg text-red-500">
              ₹{product.price}
            </span>{" "}
            ₹{discountedPrice.toFixed(2)}
          </p>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          <div className="flex items-center mb-4">
            {[...Array(Math.round(product.rating))].map((_, index) => (
              <AiFillStar key={index} color="orange" className="h-6 w-6" />
            ))}
          </div>
          <div className="flex items-center mb-6">
            <button
              className="text-xl focus:outline-none"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              value={quantity}
              className="border border-gray-300 rounded-md px-3 py-2 text-lg w-16 mx-2 text-center focus:outline-none"
            />
            <button
              className="text-xl focus:outline-none"
              onClick={() => setQuantity((prev) => Math.min(prev + 1, 10))}
            >
              +
            </button>
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none ${
              addedToCart ? "cursor-not-allowed" : ""
            }`}
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            {addedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
