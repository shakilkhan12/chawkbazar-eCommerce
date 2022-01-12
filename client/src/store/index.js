import {configureStore} from "@reduxjs/toolkit"
import authService from "./services/authService"
const Store = configureStore({
    reducer: {
         [authService.reducerPath]: authService.reducer
    }
});
export default Store;