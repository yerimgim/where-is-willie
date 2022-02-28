import React, { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";

import Modal from "../../../common/components/modal/Modal";

const MainChapter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Main>
        <AiOutlineMail
          className="mail"
          size="40px"
          color="white"
          onClick={closeModal}
        />
        {modalOpen && <Modal closeModal={closeModal} />}
        <section>
          <div>text</div>
        </section>
      </Main>
    </>
  );
};

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);

  .mail {
    position: absolute;
    top: 50px;
    right: 50px;
  }

  section {
    width: 50%;
  }
`;

export default MainChapter;
