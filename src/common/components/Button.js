import React from "react";

import styled from "styled-components";

const Button = ({ closeModal, text }) => {
  return (
    <ButtonContainer>
      <button onClick={closeModal}>{text}</button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  button {
    padding: 10px;
    background: var(--blue-color);
    font-size: 35px;
    color: var(--white-color);
  }
`;

export default Button;
