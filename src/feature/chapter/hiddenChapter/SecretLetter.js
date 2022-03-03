import React from "react";

import styled from "styled-components";

const SecretLetter = () => {
  return (
    <Main>
      <h1>Secret letter</h1>
    </Main>
  );
};

const Main = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
`;

export default SecretLetter;
