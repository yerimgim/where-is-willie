import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
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
          <Quiz setValue={setValue} value={value} quiz={quiz}>
            <PhotoList
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <li style={style}>
                <img src="assets/photo/person.png" alt="첫번째사진 이미지" />
              </li>
              <li>
                <img src="assets/photo/person1.png" alt="두번째 사진 이미지" />
              </li>
              <li>
                <img src="assets/photo/person2.png" alt="세번째 사진 이미지" />
              </li>
              <li>
                <img src="assets/photo/person3.png" alt="네번째 사진 이미지" />
              </li>

              <li>
                <img
                  src="assets/photo/person5.png"
                  alt="일곱번째 사진 이미지"
                />
              </li>

              <li>
                <img
                  src="assets/photo/person7.png"
                  alt="아홉번째 사진 이미지"
                />
              </li>
            </PhotoList>
          </Quiz>
        )}
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
    filter: drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
    transition: all 0.3s ease-in-out;
  }
`;

const PhotoList = styled.ul`
  width: 350px;
  height: 350px;
  position: absolute;
  animation-delay: 1s;
  top: 40%;
  left: 25%;
  transform: translate(-25%, -40%);

  li {
    position: absolute;
  }

  li:first-child {
    filter: drop-shadow(0.2rem 0.3rem 1.5rem var(--black-color));
    &:hover {
      filter: drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
      transition: all 0.3s ease-in-out;
    }
  }
`;

export default SecondChapter;
