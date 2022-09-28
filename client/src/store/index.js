import { configureStore } from "@reduxjs/toolkit";
import authService from "./services/authService";
import categoryService from "./services/categoryService";
import productService from "./services/productService";
import paymentService from "./services/paymentService";
import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";
import cartReducer from "./reducers/cartReducer";
import homeProducts from "./services/homeProducts";
import orderService from "./services/orderService";
import userOrdersService from "./services/userOrdersService";
const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [categoryService.reducerPath]: categoryService.reducer,
    [productService.reducerPath]: productService.reducer,
    [homeProducts.reducerPath]: homeProducts.reducer,
    [paymentService.reducerPath]: paymentService.reducer,
    [orderService.reducerPath]: orderService.reducer,
    [userOrdersService.reducerPath]: userOrdersService.reducer,
    authReducer: authReducer,
    globalReducer: globalReducer,
    cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      categoryService.middleware,
      productService.middleware,
      homeProducts.middleware,
      paymentService.middleware,
      orderService.middleware,
      userOrdersService.middleware,
    ]),
});
export default Store;
