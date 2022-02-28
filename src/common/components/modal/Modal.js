import React from "react";

import styled from "styled-components";

import letter from "../../../data/letter.json";

const Modal = ({ children, closeModal }) => {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  return (
    <>
      <ModalWrapper>
        <Overlay />
        <Container>
          {children}

          <div className="book">
            <div className="cover"></div>
            <div className="page">
              <img src="assets/mainchapterImg.png" />
            </div>

            <div className="last-page">
              <button onClick={closeModal}>xxxxxxxxxxx</button>
              <h4>{letter.messaga}</h4>
              <div className="content">{letter.content}</div>
            </div>

            <div className="back-cover"></div>
          </div>
        </Container>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 999;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 95%;
  height: 95%;
  background: var(--white-color);
  overflow: hidden;
  z-index: 10;
  perspective: 1000px;

  .content {
    font-family: var(--nanum-myenogjo-font);
  }

  .book {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .book:hover .cover {
    transform: rotateX(10deg) rotateY(-180deg);
  }

  .book:hover .page {
    transform: rotateX(10deg) rotateY(-180deg);
    z-index: 2;
  }

  .cover {
    z-index: 1;
    transition: all 3s;
  }

  .back-cover {
    z-index: -2;
  }

  .cover,
  .back-cover {
    width: 300px;
    height: 400px;
    background-color: #e5e5e5;
    border-radius: 2px 20px 20px 2px;
    position: absolute;
    box-shadow: 1px 1px 10px var(--light-grey-color);
    transform: rotateX(10deg);
    transform-origin: center left;
  }

  .page,
  .last-page {
    height: 380px;
    width: 290px;
    background-color: var(--white-color);
    position: absolute;
    border-radius: 2px 10px 10px 2px;
    transform: rotateX(10deg);
    transform-origin: center left;
    z-index: -1;
  }

  .page:nth-child(2) {
    transition-duration: 3s;
  }

  .page:nth-child(3) {
    transition-duration: 2.6s;
  }

  .book:hover .page:nth-child(2) {
    transition-duration: 6s;
  }

  .book:hover .page:nth-child(3) {
    transition-duration: 5.6s;
  }

  .last-page img {
    width: 280px;
    height: 350px;
    position: relative;
    z-index: -1;
  }

  .img-page h2 {
    text-align: center;
  }
`;

export default Modal;
