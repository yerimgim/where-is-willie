import React from "react";

import styled from "styled-components";

const Button = ({ onClick, text, type }) => {
  return (
    <ButtonContainer type={type}>
      <button onClick={onClick}>{text}</button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    padding: 10px;
    font-size: 35px;
  }

  ${({ type }) => {
    return type === "start"
      ? `
      justify-content: center;
      flex-direction: row;
      display: inline-block;
      width: 16%;



      button {
        height: 100%;
        // margin: 0 5px;
        padding: 10px 40px;
        background-color: var(--yellow-color);
        font-size: 24px;
        transition-duration: 0.4s;
        cursor: pointer;

        &:hover {
          background: #fff;
          box-shadow: 0px 2px 10px 5px #97b1bf;
          color: #000;
        }
      }
    `
      : null;
  }}
`;

export default Button;
