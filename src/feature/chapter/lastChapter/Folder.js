import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../../../common/components/Button";

const Folder = ({ closeModal }) => {
  const clue = useSelector((state) => console.log(state.clue));

  console.log(clue);

  return (
    <Entry>
      <Button closeModal={closeModal} text="X" />
    </Entry>
  );
};

const Entry = styled.div`
  width: 80%;
  height: 80%;
  background: white;
`;

Folder.propTypes = {
  closeModal: PropTypes.func,
};

export default Folder;
