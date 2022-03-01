import { configureStore } from "@reduxjs/toolkit";

import nameSlice from "../modules/nameSlice";

const createStore = () => {
  const store = configureStore({
    reducer: {
      user: nameSlice,
    },
  });

  return store;
};

const store = createStore();
export default store;
