import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <ModalWrapper>
      <Overlay />
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
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
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
  font-family: var(--nanum-my-daughter-font);
  overflow: hidden;
  z-index: 10;
  perspective: 1000px;
  white-space: pre-wrap;
`;

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
