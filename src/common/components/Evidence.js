import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Evidence = ({ summary }) => {
  return (
    <Entry>
      <h1 className="ending">{Text}</h1>
      {summary.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </Entry>
  );
};

const Entry = styled.ul`
  position: absolute;
  left: 58%;
  top: 40%;
  transform: translateY(-50%);
  font-family: var(--noto-sans-kr-font);

  li:first-of-type {
    font-size: 2.6rem;
    font-weight: bold;
  }

  li {
    width: 100%;
    padding: 10px 0;
    color: var(--white-color);
    font-size: 25px;
    list-style: none;
    line-height: 1.6;
    white-space: pre-wrap;
  }
`;

Evidence.propTypes = {
  summary: PropTypes.array,
};

export default Evidence;
