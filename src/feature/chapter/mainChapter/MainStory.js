import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "../../../common/components/Button";
import Modal from "../../../common/components/modal/Modal";
import constants from "../../../common/utils/constants";
import { fadeInText } from "../../../styles/keyframes/keyframes";
import Flipfile from "./Flipfile";

const MainStory = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  const user = useSelector((state) => state.user.name);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const onClick = () => {
    history.push(constants.ROUTE_MAIN);
  };

  return (
    <Entry>
      <Content>
        <div className="img-box">
          <img src={constants.ASSETS_MASTERPIECE_IMG} alt="작품 이미지" />
        </div>
        <Text>
          <p>새벽 동이 틀 무렵,</p>
          <p>A 경찰서의 전 형사한테 급한 연락이 왔다.</p>
          <p>
            <span>
              {user} 탐정: &ldquo; 이른 아침부터 무슨 일인가요? &quot;
            </span>
          </p>
          <p>
            <span>
              전 형사: &ldquo; {user} 탐정님, 어젯밤 미술관에서 람브람스의
              대작이 사라졌습니다. 범인 윌리(가명)로 추정되는 사람이 열차를 타고
              도시를 빠져나간다는 소문을 입수하였습니다. &quot;
            </span>
          </p>
          <p>
            수사에 참여하시려면 <span>참여하기 버튼</span>을 클릭해 주세요.
          </p>
        </Text>

        <Button onClick={closeModal} text="참여하기" type="start" />
        <Button onClick={onClick} text="거절하기" type="start" />

        {modalOpen && (
          <Modal>
            <Flipfile />
          </Modal>
        )}
      </Content>
    </Entry>
  );
};

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
  animation: ${fadeInText} 3s ease-in-out;

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
    padding-top: 5px;
    text-align: left;
    line-height: 1.7;
  }

  span {
    color: var(--white-color);
    font-weight: bold;
  }
`;

export default MainStory;
