import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Evidence from "../../../common/components/Evidence";
import ImgSection from "../../../common/components/ImgSection";
import Modal from "../../../common/components/modal/Modal";
import Quiz from "../../../common/components/Quiz";
import constants from "../../../common/utils/constants";
import quiz from "../../../data/secondHiddenChapter.json";
import { fadeIn } from "../../../styles/keyframes/keyframes";
import SecretLetter from "./SecretLetter";
import Watch from "./Watch";

const SecondHiddenChapter = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const delayTime = setTimeout(() => {
      setTimer(!timer);
    }, 1000);

    return () => clearTimeout(delayTime);
  }, [location.state]);

  const cssInfo = value.replace(/\s/g, "").split(/[\n:;]+/);

  const style = {
    [cssInfo[0]]: cssInfo[1],
  };

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Main>
      <ImgSection
        imgSrc={constants.ASSETS_PASSENGER_ROOM_IMG}
        imgAlt="수상한 자의 방"
      />
      <SecretLetter setIsOpen={setIsOpen} isOpen={isOpen} style={style} />

      {location.state && timer === true ? (
        <Evidence summary={location.state.info || null} />
      ) : null}

      <WatchImg
        src={constants.ASSETS_WATCH_IMG}
        alt="시계 이미지"
        onClick={openModal}
      />

      {modalOpen && (
        <Modal>
          <Watch modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </Modal>
      )}

      {isOpen && <Quiz setValue={setValue} value={value} quiz={quiz} />}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: var(--black-color);
  animation: ${fadeIn} 1s ease-in-out;
`;

const WatchImg = styled.img`
  position: absolute;
  width: 2%;
  top: 65%;
  left: 38%;
  transform: rotate(-90deg) translate(-38%, -65%);
  filter: grayscale(100%) drop-shadow(0.2rem 0.3rem 1rem var(--black-color));
  opacity: 0.8;

  &:hover {
    filter: grayscale(0) drop-shadow(0.2rem 0.3rem 1rem var(--yellow-color));
  }
`;

export default SecondHiddenChapter;
