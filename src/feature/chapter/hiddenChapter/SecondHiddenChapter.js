import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
import ImgSection from "../../../common/components/ImgSection";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/secondHiddenChapter.json";
import SecretLetter from "./SecretLetter";
import Watch from "./Watch";

const SecondHiddenChapter = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    const delayTime = setTimeout(() => {
      setTimer(!timer);
    }, 1000);

    return () => clearTimeout(delayTime);
  }, [location.state]);

  const cssInfo = value.replace(/\s/g, "").split(/[\n:;]+/);

  const style = {
    [cssInfo[0]]: cssInfo[1],
  };

  return (
    <Main>
      <ImgSection imgSrc="/assets/passengerRoom.png" imgAlt="수상한 자의 방" />
      <SecretLetter setIsOpen={setIsOpen} isOpen={isOpen} style={style} />

      {location.state && timer === true ? (
        <Evidence summary={location.state.info || null} />
      ) : null}

      <WatchImg src="assets/watch.png" alt="시계 이미지" />
      <Watch />
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

const WatchImg = styled.img`
  position: absolute;
  width: 4%;
  top: 64%;
  left: 37%;

  transform: rotate(-90deg) translate(-37%, -64%);
  filter: grayscale(100%);
  opacity: 0.8;

  &:hover {
    filter: grayscale(0);
    filter: drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
  }
`;

export default SecondHiddenChapter;
