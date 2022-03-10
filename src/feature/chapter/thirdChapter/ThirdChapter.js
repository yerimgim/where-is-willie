import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
import ImgSection from "../../../common/components/ImgSection";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/thirdChapter.json";
import Glasses from "./Glasses";

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

      <Glasses setIsOpen={setIsOpen} isOpen={isOpen} style={style} />

      {location.state && timer === true ? (
        <Evidence summary={location.state.info || null} />
      ) : null}

      {isOpen && (
        <Quiz setValue={setValue} value={value} quiz={quiz}>
          <p className="clock" style={style}>
            1210
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

  .clock {
    position: absolute;
    top: 260px;
    left: -85px;
    color: white;
    text-align: center;
    width: 146px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    transform: perspective(340px) rotateX(46deg);
    transition: all 0.6s ease-out;
  }

  @media all and (min-width: 1700px) and (max-width: 1920px) {
    .clock {
      position: absolute;
      top: 340px;
      background: ;
    }
  }
`;

export default ThirdChapter;
