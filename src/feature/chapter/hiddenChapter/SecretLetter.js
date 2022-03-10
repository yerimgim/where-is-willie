import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const SecretLetter = ({ setIsOpen, isOpen, style }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  console.log(style);

  return (
    <Entry>
      <div className="hidden-space" style={style}>
        <div className="secretLetter">
          <img src="assets/secreatletter.png" />
        </div>
        <img
          src="assets/cushion.png"
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

  .secretLetter {
    position: absolute;
    top: 25%;
    left: 30%;
    transform: translate(-25%, -30%) skew(2deg);
    color: red;
  }

  img {
    width: 60%;
    cursor: pointer;
    filter: grayscale(100%) drop-shadow(0.1rem 0.1rem 1rem var(--black-color));
    opacity: 0.85;

    &:hover {
      filter: grayscale(0) drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
      transition: all 0.3s ease-in-out;
    }
  }
`;

SecretLetter.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  style: PropTypes.object,
};

export default SecretLetter;
