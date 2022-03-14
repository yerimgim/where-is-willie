import React, { useState, useEffect } from "react";

import { IoIosMailUnread } from "react-icons/io";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
import Quiz from "../../../common/components/Quiz";
import constants from "../../../common/utils/constants";
import quiz from "../../../data/mainChapter.json";
import { blink, fadeIn } from "../../../styles/keyframes/keyframes";

const MainChapter = () => {
  const [value, setValue] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [timer, setTimer] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const delayTime = setTimeout(() => {
      setTimer(!timer);
    }, 6000);

    return () => clearTimeout(delayTime);
  }, []);

  const showQuiz = () => {
    setVisible(!isVisible);
  };

  return (
    <Main>
      <VideoSection>
        <video height="100%" autoPlay>
          <source src={constants.ASSETS_MAIN_CORRIDOR_GIF} type="video/mp4" />
        </video>
      </VideoSection>

      <IoIosMailUnread
        size="34px"
        color="white"
        className="file-icon"
        onClick={showQuiz}
      />

      {location.state.info && timer === true ? (
        <Evidence summary={location.state.info || null} className="info" />
      ) : null}

      {isVisible && <Quiz setValue={setValue} value={value} quiz={quiz} />}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
  animation: ${fadeIn} 1s ease-in-out;

  .file-icon {
    position: absolute;
    top: 50px;
    right: 100px;
    animation: ${blink} 1.5s infinite;
    animation-delay: 7s;
    opacity: 0;
  }
`;

const VideoSection = styled.section`
  width: 55%;
  height: 100vh;
`;

export default MainChapter;
