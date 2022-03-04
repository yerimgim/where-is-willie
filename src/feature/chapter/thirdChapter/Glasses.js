import React from "react";

import styled from "styled-components";

const Glasses = ({ setIsOpen, isOpen }) => {
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Btn onClick={onClick}>dddd</Btn>
    </>
  );
};

const Btn = styled.button`
  width: 200px;
  height: 50px;
  color: red;
  background-color: blue;
  padding: 30px;
`;

export default Glasses;
