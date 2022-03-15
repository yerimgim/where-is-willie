import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import constants from "../utils/constants";

const Result = ({ summary }) => {
  const history = useHistory();
  const userName = useSelector((state) => state.user.name);
  const onClick = () => {
    history.push(constants.ROUTE_MAIN);
  };

  if (!summary || !summary.length) {
    return <div>empty</div>;
  }

  return (
    <Entry>
      <li>
        <span>{userName} 탐정님, </span>
        <br />
        {summary}
      </li>
      <button onClick={onClick}>다시 하기</button>
    </Entry>
  );
};

const Entry = styled.ul`
  position: relative;
  top: 60%;
  width: 50%;
  margin: 0 auto;
  color: var(--white-color);
  font-size: 3.1rem;
  text-align: center;
  font-family: var(--nanum-guri-font);
  list-style: none;
  transform: translateY(-60%);

  button {
    padding: 10px;
    color: var(--white-color);
    font-size: 2rem;
    font-family: var(--nanum-guri-font);
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
