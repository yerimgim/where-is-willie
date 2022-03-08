import React, { useState } from "react";

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
      <div className="button-box">
        <button onClick={closeModal}>..</button>
      </div>
      <Content>
        {modalOpen && (
          <Modal>
            <Folder closeModal={closeModal} />
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LastChapter;
