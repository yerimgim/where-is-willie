import React from "react";

import styled from "styled-components";

const ThirdChapter = () => {
  return (
    <Main>
      <ImgSection>
        <img src="/assets/restaurant.png" height="100%" alt="식당칸" />
      </ImgSection>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: var(--black-color);
`;

const ImgSection = styled.section`
  width: 55%;
  height: 100vh;
`;

export default ThirdChapter;
