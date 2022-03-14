import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import constants from "../../../common/utils/constants";
constants;

const PhotoList = ({ setIsOpen, isOpen, style, photos }) => {
  console.log(style);
  return (
    <List
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <li style={style}>
        <img src={constants.ASSETS_PERSON_IMG} alt="단서 이미지" />
      </li>

      {photos.map((photo, index) => {
        return (
          <li key={index}>
            <img src={photo} alt={`사진 이미지 ${index}`} />
          </li>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  position: absolute;
  top: 40%;
  left: 25%;
  width: 350px;
  height: 350px;
  animation-delay: 1s;
  transform: translate(-25%, -40%);

  li {
    position: absolute;
    z-index: 9;
  }

  li:first-child {
    filter: drop-shadow(0.2rem 0.3rem 1.5rem var(--black-color));

    &:hover {
      filter: drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
      transition: all 2s ease-in-out;
    }
  }
`;

PhotoList.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  style: PropTypes.object.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PhotoList;
