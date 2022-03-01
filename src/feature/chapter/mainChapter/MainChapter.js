import React, { useState, useEffect } from "react";

import { AiOutlineMail, AiOutlineFile, AiFillSound } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Modal from "../../../common/components/modal/Modal";
import Letter from "./Letter";
// import Quiz from "./Quiz";

const MainChapter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
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

  const goNextChapter = (event) => {
    event.preventDefault();
    history.push("/mainHiddenChapter");
  };

  const showQuiz = () => {
    setVisible(!isVisible);
  };

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

        <AiFillSound size="30px" color="white" className="play-icon" />

        {isVisible && (
          <QuizSection>
            <div className="img-box">
              <img src="/assets/file-folder.png" alt="폴더 이미지" />
            </div>

            <div className="text-box">
              <div className="info-box">
                <h3>윌리의 정보</h3>
                <ul>
                  <li></li>
                </ul>
                <h3>임무</h3>
                <ul>
                  <li>
                    <span className="desc">
                      <span className="pen">수상한 사람이 숨겨둔 물체</span>를
                      확인하시오.
                    </span>
                  </li>
                </ul>
              </div>
              <form>
                <StyledTextarea></StyledTextarea>
                <input type="submit" />
              </form>

              <button onClick={goNextChapter}>다음장으로</button>
            </div>
          </QuizSection>
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
    cursor: pointer;
  }
`;

const VideoSection = styled.section`
  width: 55%;
  height: 100vh;
`;

const QuizSection = styled.section`
  position: relative;
  width: 45%;
  height: 100vh;
  font-family: var(--nanum-my-daughter-font);

  .img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 95%;
      height: 93vh;
    }
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 160px;
    left: 15%;
    width: 60%;

    .info-box {
      margin-bottom: 5%;
    }

    h3 {
      margin-bottom: 10px;
      font-size: 30px;
    }

    li {
      margin-bottom: 10px;
      font-size: var(--middle-font-size);
    }

    .desc {
      transition: 0.35s ease-in-out;
      word-break: keep-all;
    }

    .desc .pen {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 50%,
        var(--yellow-color) 50%
      );
      background-size: 200%;
      transition: 0.5s;
    }

    .info-box:hover .desc .pen {
      background-position: -100% 0;
    }
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #333;
`;

export default MainChapter;
