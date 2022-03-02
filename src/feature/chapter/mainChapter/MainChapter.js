import React, { useState, useEffect } from "react";

import { AiOutlineMail, AiOutlineFile } from "react-icons/ai";
import styled from "styled-components";

import Modal from "../../../common/components/modal/Modal";
import SoundIcon from "../../../common/components/SoundIcon";
import Letter from "./Letter";
import Quiz from "./Quiz";

const MainChapter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [time, setTime] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(!time);
    }, 6500);
    return () => clearTimeout(timer);
  }, []);

  const showQuiz = () => {
    setVisible(!isVisible);
  };

  const [value, setValue] = useState("");

  return (
    <>
      <Main>
        {time === true ? (
          <AiOutlineMail
            className="mail-icon"
            size="32px"
            color="white"
            onClick={closeModal}
          />
        ) : null}

        <VideoSection>
          <video height="100%" autoPlay>
            <source src="/assets/corridor-illustrator.mp4" type="video/mp4" />
          </video>
        </VideoSection>

        {modalOpen && (
          <Modal>
            <Letter closeModal={closeModal} />
          </Modal>
        )}

        <AiOutlineFile
          size="30px"
          color="white"
          className="file-icon"
          onClick={showQuiz}
        />

        <SoundIcon />

        {isVisible && <Quiz setValue={setValue} value={value} />}
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

  .mail-icon {
    position: absolute;
    top: 50px;
    right: 50px;
    transition: all 0.5s ease-in-out;
  }

  .file-icon {
    position: absolute;
    top: 50px;
    right: 100px;
  }

  .play-icon {
    position: absolute;
    top: 50px;
    right: 150px;
  }
`;

const VideoSection = styled.section`
  width: 55%;
  height: 100vh;
`;

export default MainChapter;
