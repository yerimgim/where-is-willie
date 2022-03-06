import React, { useState, useEffect } from "react";

import { AiOutlineFile } from "react-icons/ai";
import styled from "styled-components";

import Quiz from "../../../common/components/Quiz";
import SoundIcon from "../../../common/components/SoundIcon";
import quiz from "../../../data/mainChapter.json";

const MainChapter = () => {
  const [time, setTime] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(!time);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

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

        {time === true ? (
          <AiOutlineFile
            size="30px"
            color="white"
            className="file-icon"
            onClick={showQuiz}
          />
        ) : null}

        <SoundIcon />

        {isVisible && <Quiz setValue={setValue} value={value} quiz={quiz} />}
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);

  .mail-icon {
    position: absolute;
    top: 50px;
    right: 150px;
    transition: all 30000s ease-in-out;
  }

  .file-icon {
    position: absolute;
    top: 50px;
    right: 100px;
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
