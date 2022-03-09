import React, { useState, useEffect } from "react";

import { IoMdAlarm } from "react-icons/io";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import quiz from "../../data/mainChapter.json";

const Timer = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const countDown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      } else if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countDown);
          history.push({
            pathname: quiz.fail[0],
            state: { info: [quiz.fail[1], quiz.failureHint] },
          });
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [minutes, seconds]);

  return (
    <>
      <Time>
        <IoMdAlarm size="25" />
        <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </Time>
    </>
  );
};

const Time = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;

  p {
    display: flex;
    align-items: center;
    width: 30px;
    font-size: 1.2rem;
    font-family: var(--noto-sans-kr-font);
  }
`;

export default Timer;
