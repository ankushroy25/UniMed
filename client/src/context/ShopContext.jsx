import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        if (response.status === 200) {
          setProducts(response.data);
          setCartItems(getDefaultCart(response.data));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const getDefaultCart = (products) => {
    let cart = {};
    for (const product of products) {
      cart[product._id] = 0; // Assuming _id is the MongoDB ID
    }
    return cart;
  };

  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + quantity,
    }));
  };

  const removeFromCart = (itemId, quantity = 1) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, prev[itemId] - quantity),
    }));
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const totalCartItems = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let product = products.find((product) => product._id === item);
        totalAmount += cartItems[item] * product.price; // Assuming price is the product price field
      }
    }
    return totalAmount;
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    removeItemFromCart,
    getTotalCartAmount,
    totalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
