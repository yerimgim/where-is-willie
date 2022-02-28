import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "userName",
  initialState: {
    isLoading: true,
    name: "",
  },
  reducers: {
    getUserData: (state) => {
      state.isLoading = true;
    },
    getUserName: (state, action) => {
      state.isLoading = false;
      state.name = action.payload;
    },
  },
});

export default {getUserData, getUserName} = nameSlice.actions

export default nameSlice.reducer;
