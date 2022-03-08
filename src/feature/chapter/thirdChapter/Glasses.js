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

  img {
    &:hover {
      cursor: pointer;
      filter: drop-shadow(0.1rem 0.1rem 0.8rem var(--yellow-color));
    }
  }

  @media only screen and (min-width: 1700px) {
    img {
      min-width: 68%;
    }
  }

  @media only screen and (min-width: 1200px) {
    left: 30%;
    top: 52%;
    transform: translate(-52%, -30%);
    img {
      width: 56%;
    }
  }
`;

Glasses.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Glasses;
