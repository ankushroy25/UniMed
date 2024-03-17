import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Alert } from "@mui/material";
import CartItem from "../components/CartItem.jsx";
import axios from "axios";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = Object.keys(cartItems);
        const productData = await Promise.all(
          productIds.map(async (productId) => {
            const response = await axios.get(`/api/products/${productId}`);
            return response.data; // Access response.data instead of response.product
          })
        );
        setProducts(productData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cartItems]);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="min-h-screen">
      <p className="mt-8 text-2xl font-bold text-center">Your Cart Items</p>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : products.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center">
          <div>
            {products.map((product) => (
              <div key={product._id}>
                <div className="flex items-center justify-between border-b border-gray-300 p-4">
                  <div className="flex items-center">
                    <img
                      src={`/api/images/${product.images[0].path}`}
                      alt={product.name}
                      className="w-20 h-20 rounded-md object-cover mr-4"
                    />
                    <div>
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-gray-500">
                        Price: &#8377; {product.price}
                      </p>
                      <p className="text-gray-500">
                        Quantity: {cartItems[product._id]}{" "}
                        {/* Access quantity from cartItems */}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-red-500 hover:text-red-600 focus:outline-none mr-4">
                      Remove
                    </button>
                    <p className="text-xl font-semibold">
                      &#8377; {product.price * cartItems[product._id]}{" "}
                      {/* Calculate total price */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="p-8 m-16 rounded-lg bg-white">
              <p className="font-semibold text-xl">Total : {totalAmount}</p>
              <div className="flex flex-row mt-4">
                <p className="font-semibold text-xl mr-4">
                  Proceed to <br /> Checkout{" "}
                </p>
                <Link to="/checkout">
                  <BsFillArrowRightCircleFill className="mt-4" size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Alert severity="info" className="mt-5">
            No items in cart
          </Alert>
          <Link to="/products">
            <button className="mt-8  rounded-md bg-slate-800 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Go to store
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
