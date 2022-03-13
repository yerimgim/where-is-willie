import React from "react";

import { render, cleanup } from "@testing-library/react";

import Ending from "../common/components/Ending";

afterEach(cleanup);

describe("<Ending />", () => {
  test("<Ending /> - empty props", () => {
    const { getByText } = render(<Ending />);
    expect(getByText(/empty/i)).toBeInTheDocument();
  });
});
