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
          // onMouseOver={({ target }) => (target.style.color = "yellow")}
          // onMouseOut={({ target }) => (target.style.color = "white")}
        />
        {modalOpen && <Modal closeModal={closeModal} />}
        <section>
          {/* <img src="assets/mainchapterImg.png" width="100%" height="100%" /> */}
        </section>

        <section>
          <div>text</div>
        </section>
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
  display: flex;
  position: relative;

  .mail {
    position: absolute;
    top: 50px;
    right: 50px;
  }

  section {
    width: 50%;
  }
`;

// const Section = styled.section``;

export default MainChapter;
