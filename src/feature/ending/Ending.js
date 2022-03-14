import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Result from "../../common/components/Result";
import constants from "../../common/utils/constants";
import { fadeIn } from "../../styles/keyframes/keyframes";

const Ending = () => {
  const location = useLocation();
  const txt = location.state.info[2];
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearTimeout(interval);
    }
    return () => clearTimeout(interval);
  });

  return (
    <Main>
      <div className="deco">
        <img src={constants.ASSETS_POLICE_LINE_IMG} alt="폴리스 라인 이미지" />
      </div>
      <h1 className="ending">{text}</h1>
      {location.state ? <Result summary={location.state.info[1]} /> : null}
      <div className="bottom-deco">
        <img src={constants.ASSETS_POLICE_LINE_IMG} alt="폴리스 라인 이미지" />
      </div>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;

  .deco {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(250px, 20px) rotate(20deg) scale(0.8);
  }

  .bottom-deco {
    position: absolute;
    top: 100%;
    right: 0;
    transform: translate(-400px, 10px) rotate(20deg) scale(0.8);
  }

  .ending {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-48%, -50%);
    color: var(--white-color);
    text-align: center;
    font-size: 50px;
  }

  @media screen and (min-width: 1700px) and (max-width: 1920px) {
    .bottom-deco img {
      transform: translate(-400px, 10px) scale(1.2);
    }
  }
`;

export default Ending;
