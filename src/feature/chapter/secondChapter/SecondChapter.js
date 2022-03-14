import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import AnotherQuiz from "../../../common/components/AnotherQuiz";
import Evidence from "../../../common/components/Evidence";
import ImgSection from "../../../common/components/ImgSection";
import Modal from "../../../common/components/modal/Modal";
import quiz from "../../../data/secondChapter.json";
import { fadeIn } from "../../../styles/keyframes/keyframes";
import NewsPaper from "./NewsPaper";
import Photo from "./Photo";
import PhotoList from "./PhotoList";

const SecondChapter = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [timer, setTimer] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const delayTime = setTimeout(() => {
      setTimer(!timer);
    }, 1000);

    return () => clearTimeout(delayTime);
  }, []);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  const cssInfo = value.replace(/\s/g, "").split(/[\n:;]+/);

  const style = {
    [cssInfo[0]]: cssInfo[1],
  };

  return (
    <>
      <Main>
        <ImgSection imgSrc="/assets/detective-room.png" imgAlt="탐정의 방" />
        <Photo setIsOpen={setIsOpen} isOpen={isOpen} />

        <NewsPaperImg
          src="assets/newspaper.png"
          alt="신문 이미지"
          onClick={openModal}
        />

        {modalOpen && (
          <Modal>
            <NewsPaper onClick={closeModal} />
          </Modal>
        )}

        {location.state && timer === true ? (
          <Evidence summary={location.state.info || null} />
        ) : null}

        {isOpen && (
          <AnotherQuiz setValue={setValue} value={value} quiz={quiz}>
            <PhotoList
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              style={style}
              photos={quiz.photoList}
            />
          </AnotherQuiz>
        )}
      </Main>
    </>
  );
};

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
  animation: ${fadeIn} 2s ease-in-out;
`;

const NewsPaperImg = styled.img`
  position: absolute;
  width: 9%;
  top: 72%;
  left: 12%;
  opacity: 0.8;
  filter: grayscale(100%);
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
    filter: drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
    transition: all 0.3s ease-in-out;
  }
`;

export default SecondChapter;
