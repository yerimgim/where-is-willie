import React from "react";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";

import Main from "../feature/main/Main";

describe("<Main />", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup;
  });

  test("<Main /> - getByText", () => {
    render(<Main />);

    expect(screen.getByText("유명 화가의 예술품을 훔친")).toBeInTheDocument();
    expect(screen.getByText("윌리를 찾아서")).toBeInTheDocument();
  });

  test("<Main /> - input test", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    const { getByText } = render(<Main />);
    const button = getByText("게임 시작하기");
    const input = screen.getByTestId("add-input");

    expect(button).toBeDisabled();

    fireEvent.change(input, { target: { value: "이름" } });

    screen.queryByPlaceholderText(/이름을 입력해주세요./i);

    expect(screen.getByTestId("add-input")).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(input).toHaveAttribute("value", "이름");
  });
});
