import React, { useState } from "react";

import styled from "styled-components";

import Modal from "../../../common/components/modal/Modal";
import Folder from "./Folder";

const LastChapter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <H1 onClick={closeModal}>범인 검거 페이지</H1>

      {modalOpen && (
        <Modal>
          <Folder closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

const H1 = styled.button`
  color: red;
`;

export default LastChapter;
