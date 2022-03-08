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

  img {
    width: 64%;
    opacity: 0.9;

    &:hover {
      cursor: pointer;
      filter: drop-shadow(0.1rem 0.1rem 0.8rem var(--yellow-color));
    }
  }

  @media only screen and (min-width: 1700px) {
    left: 29%;

    img {
      width: 69%;
    }
  }

  @media only screen and (min-width: 1200px) {
    img {
      min-width: 41%;
    }
  }
`;

Glasses.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Glasses;
