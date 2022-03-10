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
  width: 20px;
  height: auto;
  min-height: 100%;
  background: #dddddd;
  color: var(--black-color);
  position: absolute;
  overflow: hidden;

  li {
    height: 15px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 0.9rem;
    text-align: right;
  }
`;

export default NumberLine;
