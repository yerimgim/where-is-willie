import React from "react";

import styled from "styled-components";

const SecondChapter = () => {
  return (
    <>
      <Main>
        <ImgSection>
          <img src="/assets/detective-room.png" height="100%" alt="탐정의 방" />
        </ImgSection>
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--black-color);
`;

const ImgSection = styled.section`
  width: 55%;
  height: 100vh;
`;

export default SecondChapter;
