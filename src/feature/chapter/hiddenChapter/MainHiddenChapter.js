import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
import ImgSection from "../../../common/components/ImgSection";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/mainHiddenChapterQuiz.json";
import Ticket from "./Ticket";

const MainHiddenChapter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(false);
  const [value, setValue] = useState("");
  const location = useLocation();

  useEffect(() => {
    const delayTime = setTimeout(() => {
      setTimer(!timer);
    }, 5000);

    return () => clearTimeout(delayTime);
  }, []);

  const cssInfo = value.replace(/\s/g, "").split(/[\n:;]+/);

  const style = {
    [cssInfo[0]]: cssInfo[1],
  };

  return (
    <Main>
      <ImgSection imgSrc="/assets/corridor.png" imgAlt="기차 복도 이미지" />
      <Ticket setIsOpen={setIsOpen} isOpen={isOpen} style={style} quiz={quiz} />
      {!isOpen && location.state && timer === true ? (
        <Evidence summary={location.state.info || null} />
      ) : null}

      {isOpen && <Quiz setValue={setValue} value={value} quiz={quiz} />}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
`;

export default MainHiddenChapter;
