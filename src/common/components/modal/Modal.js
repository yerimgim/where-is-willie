import React from "react";

import styled from "styled-components";

const Modal = ({ children, visible }) => {
  return (
    <ModalWrapper>
      <Overlay visible={visible} />
      <Container>{children}</Container>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background: yellow;
  opacity: 1;
  z-index: 10;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 100%; */
  /* height: 100%; */
  /* background: #00000080; */
  /* background: blue; */
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  /* background: var(--black-color); */
  overflow: hidden;
  z-index: 10;
  perspective: 1000px;
  font-family: var(--nanum-my-daughter-font);
  white-space: pre-wrap;
`;

export default Modal;
