import React from "react";
import "@testing-library/jest-dom";

import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import * as reactRedux from "react-redux";
import { Router } from "react-router-dom";

import App from "../app/App";

describe("<App />", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup;
  });

  test("full app rendering", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
  });
});
