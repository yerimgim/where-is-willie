import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Icon = ({ text, onClick, children, type }) => {
  return (
    <ButtonContainer type={type}>
      <Button onClick={onClick}>
        {children}
        <span>{text}</span>
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  span {
    font-size: 0.8rem;
    font-family: var(--noto-sans-kr-font);
    padding: 5px;
  }

  ${({ type }) => {
    return type === "close"
      ? `
      width: 100%;
      display: flex;
      justify-content: flex-end;
      font-size: 30px;
      padding: 10px 0;

      span {
        font-size: 1rem;
      }
    `
      : null;
  }}
`;

const Button = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
`;

Icon.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  type: PropTypes.string,
};

export default Icon;
