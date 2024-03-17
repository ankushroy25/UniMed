import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const OrderConfirm = () => {
  return (
    <div className="flex flex-col w-[40%] items-center mx-auto min-h-screen">
      <div
        className="bg-green-100 border border-green-400 text-green-700 mt-10 mb-5 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline">
          {" "}
          Your order has been placed successfully.
        </span>
      </div>

      <Link to="/my-orders">
        <Button variant="contained" color="primary" className="mt-8">
          View My Orders
        </Button>
      </Link>
    </div>
  );
};

export default OrderConfirm;
