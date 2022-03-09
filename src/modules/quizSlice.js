import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    isLoading: true,
    result: null,
    clues: [],
  },
  reducers: {
    getResult: (state, action) => {
      state.isLoading = false;
      state.result = action.payload;
    },
    getClue: (state, action) => {
      state.clues.push(action.payload);
    },
  },
});

export const { getResult, getClue } = quizSlice.actions;

export default quizSlice.reducer;
