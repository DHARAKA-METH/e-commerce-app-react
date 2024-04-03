import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: [
    {
      imgLink: "https://rb.gy/302mre",
    },

  ],
};
const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.Items = action.payload;
    },
  },
});

export const { addItem } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
