import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Ending from "../../common/components/Ending";

const Failure = () => {
  const txt = "The end!";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const location = useLocation();

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
        <img src="/assets/policeline.png" />
      </div>
      <h1 className="ending">{text}</h1>
      {location.state ? <Ending summary={location.state.info} /> : null}
      <div className="bottom-deco">
        <img src="/assets/policeline.png" />
      </div>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: var(--black-color);
  overflow: hidden;

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
    transform: translate(-600px, 10px) rotate(20deg) scale(0.8);
  }

  .ending {
    color: var(--white-color);
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-48%, -50%);
    font-size: 50px;
  }
`;

export default Failure;
