import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: [
    {
      imgLink: "https://rb.gy/302mre",
      unitPrice:1000,
      Qty:2
    },

  ],
};
const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.Items.push(action.payload)
    },
  },
});

export const { addItem } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
