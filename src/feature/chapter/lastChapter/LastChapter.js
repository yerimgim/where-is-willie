import React, { useState } from "react";

import { VscKey } from "react-icons/vsc";
import styled from "styled-components";

import Modal from "../../../common/components/modal/Modal";
import Folder from "./Folder";
import Suspects from "./Suspects";

const LastChapter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Entry>
      <VscKey onClick={closeModal} size="30px" />
      <Content>
        {modalOpen && (
          <Modal>
            <Folder onClick={closeModal} />
          </Modal>
        )}
        <Suspects />
      </Content>
    </Entry>
  );
};

const Entry = styled.main`
  width: 100%;
  height: 100vh;
  background: url("assets/paper.png");
  border: 25px solid var(--yellow-color);
  box-sizing: border-box;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LastChapter;
