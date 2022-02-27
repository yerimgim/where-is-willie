import { configureStore } from "@reduxjs/toolkit";

const createStore = () => {
  const store = configureStore({
    reducer: {},
  });

  return store;
};

const store = createStore();
export default store;
