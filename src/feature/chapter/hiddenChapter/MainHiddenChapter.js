import React, { useState } from "react";

import styled from "styled-components";

import Ticket from "./Ticket";

const MainHiddenChapter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Main>
        <ImgSection>
          <img src="/assets/corridor.png" height="100%" alt="복도 이미지" />
        </ImgSection>
        <Ticket setIsOpen={setIsOpen} isOpen={isOpen} />

        {isOpen && (
          <QuizSection>
            <div className="img-box">
              <img src="/assets/file-folder.png" alt="폴더 이미지" />
            </div>
            <div className="text-box">
              <h3></h3>
              <div></div>
            </div>
          </QuizSection>
        )}
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

const QuizSection = styled.section`
  position: relative;
  width: 45%;
  height: 100vh;

  .img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 95%;
      height: 93vh;
    }
  }

  .text-box {
    position: absolute;
    top: 160px;
    left: 120px;

    h3 {
      color: red;
    }
  }
`;

export default MainHiddenChapter;
