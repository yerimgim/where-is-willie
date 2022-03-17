import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
import ImgSection from "../../../common/components/ImgSection";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/thirdChapter.json";
import { fadeIn } from "../../../styles/keyframes/keyframes";
import Wine from "./Wine";

const ThirdChapter = () => {
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
      <ImgSection imgSrc="/assets/restaurant.png" imgAlt="북적거리는 식당칸" />
      <Wine setIsOpen={setIsOpen} isOpen={isOpen} style={style} />

      {location.state && timer === true ? (
        <Evidence summary={location.state.info || null} />
      ) : null}

      {isOpen && (
        <Quiz setValue={setValue} value={value} quiz={quiz}>
          <p className="clue" style={style}>
            {quiz.napkin}
          </p>
        </Quiz>
      )}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
  object-fit: cover;
  animation: ${fadeIn} 1s ease-in-out;

  .clue {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 260px;
    left: -70px;
    width: 120px;
    min-width: 30%;
    height: 110px;
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    color: white;
    font-size: 2.5rem;
    text-align: center;
    font-family: var(--lora-font);
    box-shadow: inset 0px 0px 35px 13px white;
    opacity: 0.8;
    transform: perspective(340px) rotateX(46deg);
    transition: all 0.6s ease-out;
  }

  @media all and (min-width: 1700px) and (max-width: 1920px) {
    .clue {
      position: absolute;
      top: 340px;
    }
  }
`;

export default ThirdChapter;
