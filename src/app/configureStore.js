import { configureStore } from "@reduxjs/toolkit";

import nameSlice from "../modules/nameSlice";
import quizSlice from "../modules/quizSlice";

const createStore = () => {
  const store = configureStore({
    reducer: {
      user: nameSlice,
      quiz: quizSlice,
    },
  });

  return store;
};

const store = createStore();
export default store;
