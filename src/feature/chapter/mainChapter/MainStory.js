import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import Modal from "../../../common/components/modal/Modal";
import Letter from "./Letter";

const MainStory = () => {
  const user = useSelector((state) => state.user.name);
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const onClick = () => {
    history.push("/");
  };

  return (
    <Entry>
      <Content>
        <div className="img-box">
          <img src="assets/masterpiece.png" />
        </div>
        <Text>
          <p>새벽 동이 틀 무렵,</p>
          <p>A경찰서의 전 형사한테 급한 연락이 왔다.</p>
          <p>
            <span>
              {user} 탐정: &ldquo; 이른 아침부터 무슨 일 인가요? &quot;
            </span>
          </p>
          <p>
            <span>
              전형사: &ldquo; {user} 탐정님, 어제 밤 미술관에서 람브람스의
              대작이 사라졌습니다.
            </span>
            범인 윌리(가명) 로 추정되는 사람이 열차를 타고 유럽을 빠져나간다는
            소문을 입수 하였습니다. &quot;
          </p>
          <p>
            수사에 참여하시려면 <span> 참여하기 버튼</span>을 클릭해주세요.
          </p>
        </Text>

        <Buttons>
          <button className="start" onClick={closeModal}>
            참여하기
          </button>

          {modalOpen && (
            <Modal>
              <Letter closeModal={closeModal} />
            </Modal>
          )}

          <button className="start" onClick={onClick}>
            거절하기
          </button>
        </Buttons>
      </Content>
    </Entry>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Entry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  min-height: 100%;
  background-color: var(--black-color);
  font-size: 24px;
`;

const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 3s ease-in-out;

  .img-box {
    img {
      width: 230px;
      height: 270px;
    }
  }
`;

const Text = styled.div`
  width: 40%;
  margin: 0 auto;
  padding: 35px 0;
  color: var(--light-grey-color);

  p {
    text-align: left;
    line-height: 1.7;
  }

  span {
    color: var(--white-color);
    font-weight: bold;
  }
`;

const Buttons = styled.div`
  button.start {
    margin: 0 5px;
    padding: 10px 40px;
    height: 100%;
    font-size: 24px;
    background-color: var(--yellow-color);
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover {
      background: #fff;
      box-shadow: 0px 2px 10px 5px #97b1bf;
      color: #000;
    }
  }
`;

export default MainStory;