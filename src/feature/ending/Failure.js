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
      <h1 className="ending">{text}</h1>
      {location.state ? <Ending summary={location.state.info} /> : null}
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  .ending {
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-48%, -50%);
  }
`;

export default Failure;
