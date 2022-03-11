import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "../app/App";

describe("<App />", () => {
  test("full app rendering", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
  });
});
