import React from "react";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Ending = ({ summary }) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };
  return (
    <Entry>
      {summary.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
      <button onClick={onClick}>다시 하기</button>
    </Entry>
  );
};

const Entry = styled.ul`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;

  li:last-child {
    /* width: 50%; */
    /* padding: 10px 0; */
    background: var(--black-color);
    color: var(--white-color);
    width: 50%;
    font-size: 25px;
    list-style: none;
    line-height: 1.6;
    white-space: pre-wrap;
  }
`;

Ending.propTypes = {
  summary: PropTypes.arrayOf(PropTypes.string),
};

export default Ending;
