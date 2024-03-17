import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill, BsTrash } from "react-icons/bs";

import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const productIds = Object.keys(cartItems);
      const productData = await Promise.all(
        productIds.map(async (productId) => {
          const response = await axios.get(`/api/products/${productId}`);
          return response.data;
        })
      );
      setProducts(productData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [cartItems]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const handleUpdateQuantity = (productId, quantity, price) => {
    if (quantity <= 0) {
      dispatch(removeFromCart({ productId }));
    } else {
      dispatch(updateQuantity({ productId, quantity, price }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : products.length > 0 ? (
          <div>
            <p className="text-2xl font-semibold mb-4">Your Cart Items</p>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="border-b border-gray-200 last:border-0 flex items-center justify-between p-4"
                >
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
                      <div className="flex items-center mt-2">
                        <button
                          className="text-blue-500 hover:text-blue-600 focus:outline-none mr-2"
                          onClick={() =>
                            handleUpdateQuantity(
                              product._id,
                              cartItems[product._id] - 1,
                              product.price
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          id={`quantity-${product._id}`}
                          name={`quantity-${product._id}`}
                          min="0"
                          value={cartItems[product._id]}
                          onChange={(e) =>
                            handleUpdateQuantity(
                              product._id,
                              parseInt(e.target.value),
                              product.price
                            )
                          }
                          className="border border-gray-300 rounded-md px-2 py-1 text-sm w-16 mr-2"
                        />
                        <button
                          className="text-blue-500 hover:text-blue-600 focus:outline-none mr-4"
                          onClick={() =>
                            handleUpdateQuantity(
                              product._id,
                              cartItems[product._id] + 1,
                              product.price
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6 items-center">
                    <BsTrash
                      className="text-red-500 hover:text-red-600 cursor-pointer"
                      size={20}
                      onClick={() => handleRemoveFromCart(product._id)}
                    />
                    <p className="text-xl font-semibold ">
                      &#8377; {product.price * cartItems[product._id]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 mt-6 bg-white shadow-md rounded-lg flex justify-between">
              <p className="font-semibold text-xl">
                Total : &#8377; {totalAmount}
              </p>
              <div className="">
                <Link to="/checkout" className="flex items-center">
                  <p className="font-semibold text-xl mr-4">
                    Proceed to Checkout
                  </p>
                  <BsFillArrowRightCircleFill
                    className="text-blue-500 hover:text-blue-600"
                    size={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-semibold mb-4">No items in cart</p>
            <Link to="/products">
              <button className="rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Go to store
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
