import React from "react";

import styled from "styled-components";

const ImgSection = ({ imgSrc, imgAlt }) => {
  return (
    <Img>
      <img src={imgSrc} height="100%" alt={imgAlt} />
    </Img>
  );
};

const Img = styled.section`
  width: 55%;
  height: 100vh;
`;

export default ImgSection;
