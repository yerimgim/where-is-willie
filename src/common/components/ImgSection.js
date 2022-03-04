import React from "react";

import PropTypes from "prop-types";
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

ImgSection.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default ImgSection;
