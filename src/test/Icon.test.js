import React from "react";

import { render, screen } from "@testing-library/react";

import Icon from "../common/components/Icon";

describe("<Icon />", () => {
  test("Icon test", () => {
    const utils = render(<Icon text="닫기" />);
  });
});
