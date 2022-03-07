import React from "react";

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
  top: 42%;
  left: 26%;

  img {
    width: 69%;
    opacity: 0.9;

    &:hover {
      cursor: pointer;
      filter: drop-shadow(0.1rem 0.1rem 0.8rem var(--yellow-color));
    }
  }
`;

export default Glasses;
