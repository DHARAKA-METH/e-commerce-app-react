import { configureStore } from "@reduxjs/toolkit";
import CategoryReducerSlice from "./ReduxSlice/CategorySlice";

const store = configureStore({
  reducer: {
    category: CategoryReducerSlice,
  },
});

export default store;
