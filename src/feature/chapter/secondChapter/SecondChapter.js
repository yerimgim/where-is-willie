import React, { useState } from "react";

import styled from "styled-components";

import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/secondChapter.json";
import NewsPaper from "./NewsPaper";
import Photo from "./Photo";

const SecondChapter = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Main>
        <ImgSection>
          <img src="/assets/detective-room.png" height="100%" alt="탐정의 방" />
        </ImgSection>
        <Photo />
        <NewsPaper />
        <Quiz setValue={setValue} value={value} quiz={quiz} />
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

const ImgSection = styled.section`
  width: 55%;
  height: 100vh;
`;

export default SecondChapter;
