import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders");
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={`/api/images/${order.cartItems[0].image.path}`}
                alt={order.cartItems[0].name}
                className="w-full h-56 object-cover object-center"
              />
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {order.cartItems[0].name}
                </h2>
                <p className="text-gray-600 mt-2">
                  Total Items: {order.orderTotal.itemsCount}
                </p>
                <p className="text-gray-600">
                  Subtotal: &#8377;{order.orderTotal.cartSubtotal}
                </p>
              </div>
              <div className="px-6 py-4 bg-gray-100">
                <p className="text-gray-700 text-base">Shipping Address:</p>
                <p className="text-gray-600">{order.shippingAddress.address}</p>
                <p className="text-gray-600">
                  {order.shippingAddress.city}, {order.shippingAddress.zip}
                </p>
                <p className="text-gray-600">{order.shippingAddress.state}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
