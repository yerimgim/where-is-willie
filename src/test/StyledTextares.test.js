import React from "react";

import { render, fireEvent } from "@testing-library/react";

import StyledTextarea from "../common/components/StyledTextarea";

describe("<StyledTextarea />", () => {
  test("<StyledTextarea /> - onChange text", () => {
    const { getByPlaceholderText } = render(
      <StyledTextarea placeholder="test" />
    );

    const textareaInput = getByPlaceholderText(/test/i);
    const input = "get text";
    const mockChange = jest.fn();

    expect(textareaInput.value).toEqual("");

    textareaInput.onChange = mockChange;
    fireEvent.change(textareaInput, { target: { value: input } });

    expect(textareaInput.value).toEqual(input);
  });

  test("<StyledTextarea /> - display value?", () => {
    const utils = render(<StyledTextarea />);
    const textarea = utils.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "test" } });
    expect(textarea.value).toEqual("test");
  });
});
