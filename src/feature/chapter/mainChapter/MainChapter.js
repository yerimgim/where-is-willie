import React, { useState } from "react";

import { IoMailUnreadOutline } from "react-icons/io5";
import styled, { keyframes } from "styled-components";

import Quiz from "../../../common/components/Quiz";
import SoundIcon from "../../../common/components/SoundIcon";
import quiz from "../../../data/mainChapter.json";

const MainChapter = () => {
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  const showQuiz = () => {
    setVisible(!isVisible);
  };

  return (
    <>
      <Main>
        <VideoSection>
          <video height="100%" autoPlay>
            <source src="/assets/corridor-illustrator.mp4" type="video/mp4" />
          </video>
        </VideoSection>

        <IoMailUnreadOutline
          size="34px"
          color="white"
          className="file-icon"
          onClick={showQuiz}
        />

        <SoundIcon />

        {isVisible && <Quiz setValue={setValue} value={value} quiz={quiz} />}
      </Main>
    </>
  );
};

const blink = keyframes`
  from {
    opacity: 1;
    color: var(--yellow-color);
  } to {
    opacity: 0.3;
  }

`;

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);

  .file-icon {
    position: absolute;
    top: 50px;
    right: 100px;
    animation: ${blink} 1.5s infinite;
    animation-delay: 6s;
    opacity: 0;
  }

  .play-icon {
    position: absolute;
    top: 50px;
    right: 50px;
  }
`;

const VideoSection = styled.section`
  width: 55%;
  height: 100vh;
`;

export default MainChapter;
