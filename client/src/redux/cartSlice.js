import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {}, // Object to store item quantities by productId
    totalAmount: 0, // Total amount of all items in the cart
    totalItems: 0, // Total number of items in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, price, quantity } = action.payload;
      const prevQuantity = state.items[productId] || 0;
      state.items[productId] = prevQuantity + quantity;
      state.totalItems += quantity;
      state.totalAmount += price * quantity;
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      delete state.items[productId];
    },
    updateQuantity: (state, action) => {
      const { productId, quantity, price } = action.payload;
      const prevQuantity = state.items[productId] || 0;
      state.items[productId] = quantity;
      state.totalItems += quantity - prevQuantity;
      state.totalAmount += (quantity - prevQuantity) * price;
    },
    emptyCart: (state) => {
      state.items = {};
      state.totalAmount = 0;
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
