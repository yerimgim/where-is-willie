import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import constants from "../../../common/utils/constants";

const SecretLetter = ({ setIsOpen, isOpen, style }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="hidden-space" style={style}>
        <div className="secretletter-container">
          <img
            src={constants.ASSETS_SECRET_LETTER_IMG}
            alt="비밀 편지"
            className="letter"
          />
        </div>
        <img
          src={constants.ASSETS_CUSSION_IMG}
          alt="쿠션 이미지"
          style={style}
          onClick={onClick}
        />
      </div>
    </Entry>
  );
};

const Entry = styled.div`
  position: absolute;
  top: 75%;
  left: 3%;
  width: 200px;
  opacity: 0.9;

  .hidden-space {
    display: flex;
  }

  .secretletter-container {
    position: absolute;
    top: 25%;
    left: 30%;
    transform: translate(-25%, -30%) skew(2deg);
  }

  .letter {
    &:hover {
      position: relative;
      transform: scale(1.5);
      z-index: 1;
      opacity: 1;
    }
  }

  img {
    width: 60%;
    opacity: 0.85;
    cursor: pointer;
    filter: grayscale(100%) drop-shadow(0.1rem 0.1rem 1rem var(--black-color));

    &:hover {
      filter: grayscale(0) drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
      transition: all 0.3s ease-in-out;
    }
  }

  @media screen and (min-width: 1700px) and (max-width: 1920px) {
    img {
      transform: scale(1.2);
    }
  }
`;

SecretLetter.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  style: PropTypes.object,
};

export default SecretLetter;
