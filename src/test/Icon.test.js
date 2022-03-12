import React from "react";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Icon from "../common/components/Icon";

afterEach(cleanup);

describe("<Icon />", () => {
  test("<Icon /> - getByText", () => {
    const text = "닫기";

    render(<Icon text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("<Icon /> - onClick", () => {
    const handleClick = jest.fn();

    render(<Icon onClick={handleClick}>close</Icon>);

    fireEvent.click(screen.getByText(/close/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("<Icon /> - type", () => {
    const { container } = render(<Icon variant="default" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
