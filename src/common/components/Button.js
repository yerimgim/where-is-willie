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
    font-size: 35px;
  }
`;

export default Button;
