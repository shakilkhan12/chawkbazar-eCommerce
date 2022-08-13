import { createSlice } from "@reduxjs/toolkit";
const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { addCart } = cartReducer.actions;
export default cartReducer.reducer;
