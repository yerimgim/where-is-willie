import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
import ImgSection from "../../../common/components/ImgSection";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/secondHiddenChapter.json";
import SecretLetter from "./SecretLetter";

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
      <ImgSection imgSrc="/assets/passengerRoom.png" imgAlt="수상한자의 방" />
      <SecretLetter setIsOpen={setIsOpen} isOpen={isOpen} style={style} />

      {location.state && timer === true ? (
        <Evidence summary={location.state.info || null} />
      ) : null}

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

export default SecondHiddenChapter;
