import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Photo = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Entry>
      <div className="photo-container" onClick={onClick}>
        <img src="assets/people.png" />
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
    width: 30%;
    transform: skew(330deg, 20deg);
    opacity: 0.7;
  }
`;

Photo.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Photo;
