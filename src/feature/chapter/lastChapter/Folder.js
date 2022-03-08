import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../../../common/components/Button";

const Folder = ({ closeModal }) => {
  const clueInfo = useSelector((state) => state.quiz.clues);

  return (
    <Entry>
      <Button closeModal={closeModal} text="X" />
      <ul>
        {clueInfo &&
          clueInfo.map((clue, index) => {
            return <li key={index}>{clue}</li>;
          })}
      </ul>
    </Entry>
  );
};

const Entry = styled.div`
  width: 80%;
  height: 80%;
  background: white;

  li {
    /* color: red; */
  }
`;

Folder.propTypes = {
  closeModal: PropTypes.func,
};

export default Folder;