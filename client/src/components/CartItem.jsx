import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { AiFillDelete } from "react-icons/ai";

const CartItem = (props) => {
  const { id, title, img, newPrice, color, company } = props.data;
  const { cartItems, addToCart, removeFromCart, removeItemFromCart } =
    useContext(ShopContext);

  return (
    <div>
      <div className="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border p-4 text-center md:max-w-lg md:flex-row md:items-start h-full w-full bg-blue-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-gray-100">
        <div className="rounded-md mb-4 md:mr-6 md:mb-0 bg-white p-2">
          <img src={img} alt={title} />
        </div>
        <div className="">
          <p className="text-xl font-bold text-gray-700">{title}</p>
          <div className="mt-2 flex space-x-2">
            <div className="flex flex-col items-center rounded-xl  p-4">
              <p className="text-sm font-medium text-gray-500">Price</p>
              <p className="text-2xl font-medium text-gray-600">${newPrice}</p>
            </div>
            <div className="flex flex-col items-center rounded-xl  p-4">
              <p className="text-sm font-medium text-gray-500">Color</p>
              <p className="text-2xl font-medium text-gray-600">{color}</p>
            </div>
            <div className="flex flex-col items-center rounded-xl  p-4">
              <p className="text-sm font-medium text-gray-500">Company</p>
              <p className="text-2xl font-medium text-gray-600">{company}</p>
            </div>
          </div>
          <div className="mb-3"></div>
          <div className="flex justify-start space-x-2 m-4">
            <p className="font-medium text-gray-600">
              Quantity : {cartItems[id]}
            </p>
            <button
              onClick={() => addToCart(id)}
              className=" rounded-lg border-2 bg-white px-2 font-medium "
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(id)}
              className=" rounded-lg border-2 border-transparent bg-white px-2 font-medium "
            >
              -
            </button>

            <button
              className="rounded-lg border-2 border-transparent bg-white px-4 font-medium "
              onClick={() => removeItemFromCart(id)}
            >
              <AiFillDelete size={20} color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
