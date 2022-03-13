import React from "react";

import PropTypes from "prop-types";
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
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      width: 16%;

      button {
        height: 100%;
        padding: 10px 40px;
        background-color: var(--yellow-color);
        font-size: 24px;
        transition-duration: 0.4s;
        cursor: pointer;

        &:hover {
          background: #fff;
          color: #000;
          box-shadow: 0px 2px 10px 5px #97b1bf;
        }
      }
    `
      : null;
  }}
`;

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
