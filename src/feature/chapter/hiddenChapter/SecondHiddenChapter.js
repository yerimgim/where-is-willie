import React from "react";

import styled from "styled-components";

import ImgSection from "../../../common/components/ImgSection";
import SecretLetter from "./SecretLetter";

const SecondHiddenChapter = () => {
  return (
    <Main>
      <ImgSection imgSrc="/assets/passengerRoom.png" imgAlt="수상한자의 방" />
      <SecretLetter></SecretLetter>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: var(--black-color);
`;

export default SecondHiddenChapter;
