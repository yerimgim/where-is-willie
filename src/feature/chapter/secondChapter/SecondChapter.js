import React, { useState } from "react";

import styled from "styled-components";

import ImgSection from "../../../common/components/ImgSection";
import Modal from "../../../common/components/modal/Modal";
import Quiz from "../../../common/components/Quiz";
import quiz from "../../../data/secondChapter.json";
import NewsPaper from "./NewsPaper";
import Photo from "./Photo";

const SecondChapter = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Main>
        <ImgSection imgSrc="/assets/detective-room.png" imgAlt="탐정의 방" />
        <Photo setIsOpen={setIsOpen} isOpen={isOpen} />
        <NewsPaperImg src="assets/newspaper.png" onClick={openModal} />
        {modalOpen && (
          <Modal>
            <NewsPaper closeModal={closeModal} />
          </Modal>
        )}
        {isOpen && <Quiz setValue={setValue} value={value} quiz={quiz} />}
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: var(--black-color);
`;

const NewsPaperImg = styled.img`
  width: 9%;
  position: absolute;
  top: 72%;
  left: 12%;
  opacity: 0.8;
  filter: grayscale(100%);
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
    transition: all 0.3s ease-in-out;
  }
`;

export default SecondChapter;
