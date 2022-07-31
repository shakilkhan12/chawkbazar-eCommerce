import { createSlice } from "@reduxjs/toolkit";
const globalReducer = createSlice({
  name: "global",
  initialState: {
    success: "",
    searchBar: false,
  },
  reducers: {
    setSuccess: (state, action) => {
      console.log(action);
      state.success = action.payload;
    },
    clearMessage: (state) => {
      state.success = "";
    },
    toggleSearchBar: (state) => {
      state.searchBar = !state.searchBar;
    },
  },
});
export const { setSuccess, clearMessage, toggleSearchBar } =
  globalReducer.actions;
export default globalReducer.reducer;
