import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalAmount: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      console.log("from ", action.payload);
      const { productId, price, quantity } = action.payload;
      state.items[productId] = (state.items[productId] || 0) + quantity;
      console.log("to ", state.items[productId]);
      state.totalItems += quantity;
      state.totalAmount += price * quantity; // Update
    },
    removeFromCart(state, action) {
      const { productId, price } = action.payload;
      if (state.items[productId] > 0) {
        state.items[productId] -= 1;
        state.totalItems -= 1;
        state.totalAmount -= price; // Subtract the price of the removed item from the total amount
      }
    },
    updateQuantity(state, action) {
      const { productId, quantity, price } = action.payload;
      const prevQuantity = state.items[productId] || 0;
      state.items[productId] = quantity;
      state.totalItems += quantity - prevQuantity;
      state.totalAmount += (quantity - prevQuantity) * price;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
