import { configureStore } from "@reduxjs/toolkit";
import CategoryReducerSlice from "./ReduxSlice/CategorySlice";
import UserReducerSlice from "./ReduxSlice/UserSlice";
import ShoppingCart from "./ReduxSlice/ShoppingCart";

const store = configureStore({
  reducer: {
    category: CategoryReducerSlice,
    UserSlice: UserReducerSlice,
    ShopingCart:ShoppingCart
  },
});

export default store;
