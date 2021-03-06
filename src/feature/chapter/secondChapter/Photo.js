import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import constants from "../../../common/utils/constants";

const Photo = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="photo-container" onClick={onClick}>
        <img src={constants.ASSETS_PHOTO_LIST_IMG} alt="사진 모음 이미지" />
      </div>
    </Entry>
  );
};

const Entry = styled.div`
  position: absolute;
  top: 75%;
  left: 33%;
  width: 10%;
  height: 10%;

  .photo-container {
    display: flex;
    justify-content: center;
  }

  img {
    width: 25%;
    opacity: 0.6;
    transform: skew(330deg, 20deg);

    &:hover {
      cursor: pointer;
      filter: drop-shadow(0.3rem 0.3rem 0.8rem var(--yellow-color));
    }
  }
`;

Photo.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Photo;
