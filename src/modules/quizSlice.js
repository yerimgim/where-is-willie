import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    isLoading: true,
    result: null,
  },
  reducers: {
    getResult: (state, action) => {
      state.isLoading = false;
      state.result = action.payload;
    },
  },
});

export const { getResult } = quizSlice.actions;

export default quizSlice.reducer;
