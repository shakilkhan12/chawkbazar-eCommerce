import { createSlice } from "@reduxjs/toolkit";
const cartData = localStorage.getItem("cart");
const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: cartData ? JSON.parse(cartData) : [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { addCart } = cartReducer.actions;
export default cartReducer.reducer;
