import { createSelector, createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "Category1",
    title: "Category title 1",
  },
  {
    id: "Category2",
    title: "Category title 2",
  },
  {
    id: "Category3",
    title: "Category title 3",
  },
  {
    id: "Category4",
    title: "Category title 4",
  },
  {
    id: "Category5",
    title: "Category title 5",
  },
];

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
});

export const CategorySelector=createSelector([(store)=>store.category],(category)=>category)
export default categorySlice.reducer;
