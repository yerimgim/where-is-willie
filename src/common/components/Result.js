import React from "react";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import constants from "../utils/constants";

const Result = ({ summary }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(constants.ROUTE_MAIN);
  };

  if (!summary || !summary.length) {
    return <div>empty</div>;
  }

  return (
    <Entry>
      <li>{summary}</li>
      <button onClick={onClick}>다시 하기</button>
    </Entry>
  );
};

const Entry = styled.ul`
  position: relative;
  top: 50%;
  width: 50%;
  margin: 0 auto;
  color: var(--white-color);
  font-size: 35px;
  text-align: center;
  list-style: none;
  transform: translateY(-50%);

  button {
    padding: 10px;
    color: var(--white-color);
    font-size: 26px;
  }

  li:last-child {
    background: var(--black-color);
    color: var(--white-color);
    white-space: pre-wrap;
  }
`;

Result.propTypes = {
  summary: PropTypes.string,
};

export default Result;
