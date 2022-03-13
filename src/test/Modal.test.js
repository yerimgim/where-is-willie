import React from "react";

import { render } from "@testing-library/react";

import Modal from "../common/components/modal/Modal";

describe("<Modal />", () => {
  test("<Modal />", () => {
    const { getByText } = render(
      <Modal>
        <div>test</div>
      </Modal>
    );

    expect(getByText("test")).toBeTruthy();
  });
});
