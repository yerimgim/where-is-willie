import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Glasses = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="photo-container" onClick={onClick}>
        <img src="assets/wine.png" alt="와인 이미지" />
      </div>
    </Entry>
  );
};

const Entry = styled.div`
  position: absolute;
  top: 52%;
  left: 30%;
  transform: translate(-52%, -30%);
  object-fit: cover;

  img {
    width: 56%;
    &:hover {
      cursor: pointer;
      filter: drop-shadow(0.1rem 0.1rem 0.8rem var(--yellow-color));
    }
  }

  @media all and (min-width: 1700px) and (max-width: 1920px) {
    left: 29%;
    img {
      min-width: 69%;
    }
  }
`;

Glasses.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Glasses;
