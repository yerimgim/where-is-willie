import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: true,
    name: null,
  },
  reducers: {
    getUserName: (state, action) => {
      state.isLoading = false;
      state.name = action.payload;
    },
  },
});

export const { getUserName } = nameSlice.actions;

export default nameSlice.reducer;
