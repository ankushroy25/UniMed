import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { toast } from "react-toastify";

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

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.delete(`/api/orders/${orderId}`);
      if (response.status === 200) {
        setOrders(orders.filter((order) => order._id !== orderId));
        toast.success("Order cancelled successfully!");
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
    }
  };

  return (
    <div className="container w-4/5 px-8 mx-auto py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex"
            >
              <div className="w-2/3 px-6 py-4">
                <p className="text-gray-600 mb-2">
                  Order placed on{" "}
                  {new Intl.DateTimeFormat("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(new Date(order.createdAt))}
                </p>
                <div>
                  <span className="text-gray-600 mb-2">
                    Your order items include:{" "}
                  </span>
                  {order.cartItems.map((item, index) => (
                    <span
                      key={item._id}
                      className="text-lg font-semibold text-gray-800 ml-1"
                    >
                      {item.name}
                      {index !== order.cartItems.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-1/3 px-6 py-4 flex flex-col justify-between items-end">
                <div className="text-right">
                  <p className="text-gray-600 ">
                    Total Items: {order.orderTotal.itemsCount}
                  </p>
                  <p className="text-gray-600">
                    Subtotal: &#8377;{order.orderTotal.cartSubtotal}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => cancelOrder(order._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
