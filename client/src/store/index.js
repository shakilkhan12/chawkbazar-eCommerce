import {configureStore} from "@reduxjs/toolkit"
import authService from "./services/authService"
import categoryService from "./services/categoryService";
import authReducer from "./reducers/authReducer"
const Store = configureStore({
    reducer: {
         [authService.reducerPath]: authService.reducer,
         [categoryService.reducerPath]: categoryService.reducer,
         "authReducer": authReducer
    }
});
export default Store;