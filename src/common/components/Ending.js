import React from "react";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Ending = ({ summary }) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };

  if (!summary || !summary.length) {
    return <div>empty</div>;
  }

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
  width: 50%;
  margin: 0 auto;
  color: var(--white-color);
  font-size: 35px;
  text-align: center;
  list-style: none;

  button {
    padding: 10px;
    font-size: 26px;
    color: var(--white-color);
  }

  li:last-child {
    background: var(--black-color);
    color: var(--white-color);
    white-space: pre-wrap;
  }
`;

Ending.propTypes = {
  summary: PropTypes.arrayOf(PropTypes.string),
};

export default Ending;
