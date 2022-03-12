// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import store from "./app/configureStore";
import GlobalStyle from "./app/GlobalStyle";

export const cutomRender = () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Provider store={store}>
        <GlobalStyle />
      </Provider>
    </Router>
  );
};
