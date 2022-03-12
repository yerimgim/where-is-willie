import React from "react";

import { render, screen } from "@testing-library/react";

import ImgSection from "../common/components/ImgSection";

describe("<ImgSection />", () => {
  test("<ImgSection /> - getByAltText", () => {
    const imgSrc = "example.png";
    const imgAlt = "example";

    const image = render(<ImgSection imgSrc={imgSrc} imgAlt={imgAlt} />);

    expect(image).toBeTruthy();

    // expect(inp).toHaveAttribute("placeholder", "test")
  });
});
