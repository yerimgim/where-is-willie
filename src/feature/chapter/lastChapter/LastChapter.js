import React from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

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
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("assets/paper.png");
  border: 25px solid var(--yellow-color);
  box-sizing: border-box;
  display: flex;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LastChapter;
