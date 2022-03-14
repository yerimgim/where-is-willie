import React from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { fadeIn } from "../../../styles/keyframes/keyframes";
import Suspects from "./Suspects";

const LastChapter = () => {
  const location = useLocation();

  return (
    <Entry>
      <Content>
        {location.state && <Suspects inference={location.state.info} />}
      </Content>
    </Entry>
  );
};

const Entry = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("assets/paper.png");
  border: 25px solid var(--yellow-color);
  box-sizing: border-box;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default LastChapter;
