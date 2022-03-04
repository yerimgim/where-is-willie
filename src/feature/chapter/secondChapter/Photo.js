import React from "react";

import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Photo = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Entry>
        <div className="photo-container" onClick={onClick}>
          <img src="assets/people.png" alt="사진 모음 이미지" />
        </div>
      </Entry>

      {isOpen && (
        <Img>
          <img src="assets/people.png" onClick={onClick} />
        </Img>
      )}
    </>
  );
};

const photos = keyframes`
  from  {
    opacity: 0
  } to {
    opacity: 10;
  }
`;

const Img = styled.div`
  position: absolute;
  top: 45%;
  left: 18%;
  transform: translate(-18%, -45%);
  width: 50%;
  height: 50%;
  z-index: 1;
  animation: ${photos} 2s;

  img {
    width: 60%;
  }
`;

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
