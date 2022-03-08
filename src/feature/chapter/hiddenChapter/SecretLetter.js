import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const SecretLetter = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="hidden-space" onClick={onClick}>
        <img src="assets/cushion.png" alt="쿠션 이미지" />
      </div>
    </Entry>
  );
};

const Entry = styled.div`
  position: absolute;
  top: 75%;
  left: 3%;

  img {
    width: 60%;
    cursor: pointer;
    filter: grayscale(100%);
    opacity: 0.8;

    &:hover {
      filter: grayscale(0);
      : drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
      transition: all 0.3s ease-in-out;
    }
  }
`;

SecretLetter.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default SecretLetter;
