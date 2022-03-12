import React from "react";

import { cleanup, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Timer from "../common/components/Timer";

afterEach(cleanup);

describe("<Timer />", () => {
  test("<Timer /> - icon", () => {
    const title = "alarm icon";
    const { getByTitle } = render(<Timer />);

    expect(getByTitle(title)).toBeInTheDocument();
  });
});
