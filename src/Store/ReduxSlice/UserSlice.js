import { createSelector, createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {
    name: "dharaka",
  },
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = {};
    },
  },
});

export const userSelector = createSelector(
  [(store) => store.UserSlice.user],
  (user) => user
);
export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
