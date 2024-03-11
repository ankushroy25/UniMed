import React from "react";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const OrderConfirm = () => {
  return (
    <div className="flex flex-col  h-screen p-16">
      <div>
        <Alert severity="success">
          Your order has been placed successfully!
        </Alert>
      </div>

      <Link to="/products">
        <div>
          <button className="mt-8  rounded-md bg-slate-800 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Back to store
          </button>
        </div>
      </Link>
    </div>
  );
};

export default OrderConfirm;
