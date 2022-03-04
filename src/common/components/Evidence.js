import React from "react";

import styled from "styled-components";

const Evidence = ({ summary }) => {
  return (
    <Entry>
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

  li:first-child {
    font-size: 2.5rem;
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

export default Evidence;
