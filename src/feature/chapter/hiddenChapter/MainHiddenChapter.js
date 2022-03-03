import React, { useState } from "react";

import styled from "styled-components";

import ImgSection from "../../../common/components/ImgSection";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/mainHiddenChapterQuiz.json";
import Ticket from "./Ticket";

const MainHiddenChapter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <Main>
        <ImgSection imgSrc="/assets/corridor.png" imgAlt="기차 복도 이미지" />
        <Ticket setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && <Quiz setValue={setValue} value={value} quiz={quiz} />}
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--black-color);
`;

export default MainHiddenChapter;
