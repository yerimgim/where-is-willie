import React from "react";

import { cleanup, render, screen } from "@testing-library/react";

import Photo from "../feature/chapter/secondChapter/Photo";

afterEach(cleanup);

describe("<Photo />", () => {
  test("<Photo /> - onClick", () => {
    const { container } = render(<Photo variant="default" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("<Photo /> - img alt property ", () => {
    const { getByAltText } = render(<Photo />);

    getByAltText("사진 모음 이미지");
    expect(screen.getByAltText("사진 모음 이미지")).toBeTruthy();
  });

  test("<Photo /> - img src", () => {
    render(<Photo />);
    const people = screen.getByRole("img");

    expect(people).toHaveAttribute("src", "assets/people.png");
  });
});
