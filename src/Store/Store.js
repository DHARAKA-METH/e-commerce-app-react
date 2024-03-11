import { configureStore } from "@reduxjs/toolkit";
import CategoryReducerSlice from "./ReduxSlice/CategorySlice";
import UserReducerSlice from "./ReduxSlice/UserSlice";

const store = configureStore({
  reducer: {
    category: CategoryReducerSlice,
    UserSlice: UserReducerSlice,
  },
});

export default store;
