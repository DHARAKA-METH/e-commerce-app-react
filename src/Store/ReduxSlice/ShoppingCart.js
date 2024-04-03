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
  },
});

export const { addItem } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
