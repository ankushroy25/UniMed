import { useContext } from "react";
import PRODUCTS from "../data.js";
import { ShopContext } from "../context/ShopContext.jsx";
import CartItem from "../components/CartItem.jsx";
import { Link } from "react-router-dom";
import { TbMoodEmpty } from "react-icons/tb";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { Alert } from "@mui/material";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const { isAuthenticated } = useAuth0();

  return (
    <div className="min-h-screen">
      <p className="mt-8 text-2xl font-bold text-center"> Your Cart Items</p>

      {totalAmount > 0 ? (
        <div className="flex flex-col md:flex-row justify-center">
          <div>
            {PRODUCTS.map((product, index) => {
              if (cartItems[product.id] !== 0) {
                return (
                  <div key={index}>
                    <CartItem data={product} />
                  </div>
                );
              }
            })}
          </div>
          <div>
            <div className="p-8 m-16 rounded-lg bg-white">
              <p className="font-semibold text-xl">Total : {totalAmount}</p>

              {isAuthenticated ? (
                <div className="flex flex-row mt-4">
                  <p className="font-semibold text-xl mr-4">
                    Proceed to <br /> Checkout{" "}
                  </p>

                  <Link to="/checkout">
                    <BsFillArrowRightCircleFill className="mt-4" size={30} />
                  </Link>
                </div>
              ) : (
                <Alert className="mt-4" severity="error">
                  Login to order items
                </Alert>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center">
          <p className=" my-8 text-3xl">Cart Empty</p>
          <TbMoodEmpty size={200} />
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

export default Cart;
