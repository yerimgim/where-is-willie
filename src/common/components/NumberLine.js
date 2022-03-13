import React from "react";

import styled from "styled-components";

const NumberLine = () => {
  return (
    <List>
      {Array(10)
        .fill(0)
        .map((v, i) => {
          return <li key={v + i}>{i + 1}</li>;
        })}
    </List>
  );
};

const List = styled.ul`
  position: absolute;
  width: 20px;
  height: auto;
  min-height: 100%;
  background: #dddddd;
  color: var(--black-color);
  overflow: hidden;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 15px;
    padding: 0;
    font-size: 0.9rem;
    text-align: right;
  }
`;

export default NumberLine;
