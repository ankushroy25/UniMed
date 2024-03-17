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
  const [addedToCart, setAddedToCart] = useState(false); // State for tracking if added to cart

  const handleAddToCart = () => {
    dispatch(
      addToCart({ productId: product._id, price: product.price, quantity })
    );
    setAddedToCart(true); // Update state to indicate added to cart
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
      <div className="min-h-[800px]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[800px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex justify-start gap-2">
          {/* Other Images */}
          <div
            className="lg:col-span-1 grid grid-cols-1 gap-3 mt-5 w-[33%] p-2 pr-3 items-center"
            style={{ boxShadow: "8px 0 8px -8px rgba(0, 0, 0, 0.5)" }}
          >
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={`/api/images/${image.path}`}
                alt={product.name}
                className="w-[150px] h-auto  object-cover cursor-pointer"
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
          {/* Main Image */}
          <div className="flex items-center justify-start w-full p-2">
            <img
              src={`/api/images/${product.images[0].path}`}
              alt={product.name}
              className="w-full h-[400px]  object-contain"
            />
          </div>
        </div>

        <div className="lg:col-span-1 bg-gradient-to-r from-blue-200 to-blue-600 rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.category}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold">
              &#8377; {product.price}
            </span>
          </div>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          <div className="mb-4 flex items-center">
            {[...Array(Math.round(product.rating))].map((_, index) => (
              <AiFillStar key={index} color="orange" className="h-6 w-6" />
            ))}
          </div>
          <div className="flex items-center mt-2 mb-6">
            <button
              className=" focus:outline-none mr-2 "
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              <p className="text-2xl"> -</p>
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              value={quantity}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm w-16 mr-2 text-center focus:outline-none"
            />
            <button
              className=" focus:outline-none mr-4"
              onClick={() => setQuantity((prev) => Math.min(prev + 1, 10))}
            >
              <p className="text-2xl"> +</p>
            </button>
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none ${
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
