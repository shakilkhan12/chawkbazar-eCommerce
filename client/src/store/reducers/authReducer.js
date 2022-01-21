import { createSlice } from "@reduxjs/toolkit";
const adminStorage = localStorage.getItem('admin-token');
const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        adminToken: adminStorage ? adminStorage : null
    },
    reducers: {
        setAdminToken: (state, action) => {
          state.adminToken = action.payload;
        }
    }
})
export const {setAdminToken} = authReducer.actions;
export default authReducer.reducer;