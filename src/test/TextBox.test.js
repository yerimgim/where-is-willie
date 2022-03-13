import React from "react";

import { render, cleanup } from "@testing-library/react";

import TextBox from "../feature/chapter/lastChapter/TextBox";

afterEach(cleanup);

describe("<TextBox />", () => {
  test("TextBox - render header", () => {
    const { getByText } = render(<TextBox />);
    const header = getByText("최종 범인 지목");
    const paragraph = getByText(/^윌리/);

    expect(header).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(
      "윌리로 추정되는 유력한 용의자 5명을 소환하였습니다."
    );
  });
});
