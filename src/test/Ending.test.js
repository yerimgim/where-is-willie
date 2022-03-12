import React from "react";

import { render, cleanup } from "@testing-library/react";

import Ending from "../common/components/Ending";

afterEach(cleanup);

describe("<Ending />", () => {
  test("<Ending /> - empty props", () => {
    const { getByText } = render(<Ending />);
    expect(getByText(/empty/i)).toBeInTheDocument();
  });

  // test("<Ending /> - props", () => {
  //   const summary = [
  //     { value: "summary1", index: 1 },
  //     { value: "summary2", index: 2 },
  //   ];

  //   const { getAllByTestId } = render(<Ending summary={summary} />);

  //   const summaryId = getAllByTestId("summary-list").map(
  //     (li) => li.textContent
  //   );

  //   const fakeSummaryList = summary.map((list) => list.value);
  //   expect(summaryId).toEqual(fakeSummaryList);
  // });
});
