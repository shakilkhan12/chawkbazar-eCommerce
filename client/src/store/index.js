import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import authService from "./services/authService"
import categoryService from "./services/categoryService";
import productService from "./services/productService";
import authReducer from "./reducers/authReducer"
import globalReducer from "./reducers/globalReducer";
const Store = configureStore({
    reducer: {
         [authService.reducerPath]: authService.reducer,
         [categoryService.reducerPath]: categoryService.reducer,
         [productService.reducerPath]: productService.reducer,
          "authReducer": authReducer,
         "globalReducer": globalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([categoryService.middleware])
});
export default Store;