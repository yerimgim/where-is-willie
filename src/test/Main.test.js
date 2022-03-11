import React from "react";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../app/configureStore";
import Main from "../feature/main/Main";

describe("<Main />", () => {
  test("Main test", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    screen.getByText("게임 시작하기");
  });
});
