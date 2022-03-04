import React, { useState } from "react";

import styled from "styled-components";

import ImgSection from "../../../common/components/ImgSection";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/secondHiddenChapter.json";
import SecretLetter from "./SecretLetter";

const SecondHiddenChapter = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Main>
      <ImgSection imgSrc="/assets/passengerRoom.png" imgAlt="수상한자의 방" />
      <SecretLetter setIsOpen={setIsOpen} isOpen={isOpen} />

      {isOpen && <Quiz setValue={setValue} value={value} quiz={quiz} />}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
`;

export default SecondHiddenChapter;
