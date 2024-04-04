import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: [],
};
const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.Items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.Items.splice(action.payload,1)
    },
  },
});

export const { addItem,removeItem } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
