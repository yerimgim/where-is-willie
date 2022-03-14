import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import constants from "../utils/constants";

const ImgSection = ({ imgSrc, imgAlt, type }) => {
  return (
    <>
      {!type ? (
        <Img>
          <img src={imgSrc} alt={imgAlt} />
        </Img>
      ) : (
        <FolderImage>
          <img src={constants.ASSETS_FOLDER_IMG} alt={imgAlt} />
        </FolderImage>
      )}
    </>
  );
};

const Img = styled.section`
  width: 55%;
  height: 100vh;
  object-fit: cover;

  img {
    height: 100%;
  }
`;

const FolderImage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 95%;
    height: 93vh;
  }
`;

ImgSection.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  type: PropTypes.string,
};

export default ImgSection;
