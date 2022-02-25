import {configureStore} from "@reduxjs/toolkit"
import authService from "./services/authService"
import categoryService from "./services/categoryService";
import authReducer from "./reducers/authReducer"
import globalReducer from "./reducers/globalReducer";
const Store = configureStore({
    reducer: {
         [authService.reducerPath]: authService.reducer,
         [categoryService.reducerPath]: categoryService.reducer,
         "authReducer": authReducer,
         "globalReducer": globalReducer
    }
});
export default Store;