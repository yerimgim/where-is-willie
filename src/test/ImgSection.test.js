import React from "react";

import { cleanup, render } from "@testing-library/react";

import ImgSection from "../common/components/ImgSection";

afterEach(cleanup);

describe("<ImgSection />", () => {
  test("<ImgSection /> - toBe true", () => {
    const imgSrc = "example.png";
    const imgAlt = "example";
    const image = render(<ImgSection imgSrc={imgSrc} imgAlt={imgAlt} />);

    expect(image).toBeTruthy();
  });

  test("<ImgSection /> - alt text", () => {
    const imgSrc = "example.png";
    const imgAlt = "example";
    const { getByAltText } = render(
      <ImgSection imgSrc={imgSrc} imgAlt={imgAlt} />
    );
    const image = getByAltText("example");

    expect(image).toHaveAttribute("src", "example.png");
  });
});
