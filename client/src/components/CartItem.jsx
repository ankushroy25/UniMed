import React from "react";

const CartItem = ({ data, quantity }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-4">
      <div className="flex items-center">
        <img
          src="/images/placeholder.jpg"
          alt={data.name}
          className="w-20 h-20 rounded-md object-cover mr-4"
        />
        <div>
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-gray-500">Price: &#8377; {data.price}</p>
          <p className="text-gray-500">Quantity: {quantity}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-red-500 hover:text-red-600 focus:outline-none mr-4">
          Remove
        </button>
        <p className="text-xl font-semibold">&#8377; {data.price * quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
