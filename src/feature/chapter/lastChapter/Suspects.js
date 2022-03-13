import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../../common/components/Icon";
import Modal from "../../../common/components/modal/Modal";
import suspect from "../../../data/suspect.json";
import Folder from "./Folder";

const Suspects = () => {
  const [infos, setInfos] = useState({});
  const [isShow, setIsShow] = useState(false);
  const clueInfo = useSelector((state) => state.quiz.clues);

  const history = useHistory();
  const handleClose = () => {
    setIsShow(false);
  };

  const handleShow = (info) => {
    setIsShow(true);
    setInfos(info);
  };

  const handleEnding = () => {
    history.push({
      pathname: infos.success,
      state: { info: [null, infos.result] },
    });
  };

  return (
    <Entry>
      <TextBox>
        <h2>범인 검거</h2>
        <p>지금까지 얻은 내용을 토대로 범인을 검거 해주세요.</p>
      </TextBox>

      {suspect.suspect.map((person, index) => {
        return <Folder key={index} personInfo={person} onClick={handleShow} />;
      })}

      {isShow && (
        <Modal onClick={handleClose}>
          <ClueContainer>
            <Icon text="닫기" onClick={handleClose} type="close">
              <IoMdClose />
            </Icon>

            <ClueData>
              <h2>단서</h2>
              <img src={infos.img} alt="람브람스의 작품 이미지" />
              <ul>
                <h3>공통 정보</h3>
                <li>
                  <span>사건</span>람브람스의 예술품 도난 사건
                </li>
                <li>
                  <span>사건 발생 시각</span> FRIDAY, 15 MAY, XXXX
                </li>
                <li>
                  <span>사건 발생 장소</span> 미술관 람브람스의 전시관
                </li>
              </ul>

              <ul>
                <h3>현장에서 찾은 단서</h3>
                {clueInfo &&
                  clueInfo.map((clue, index) => {
                    return <li key={index}>{clue}</li>;
                  })}
              </ul>

              <SuspectInfo>
                <h3>유력 용의자</h3>
                <div>
                  <span>{infos.no}</span> {infos.name}
                </div>
                <ul>
                  {infos.infos.map((suspectData, index) => {
                    return <li key={index}>{suspectData}</li>;
                  })}
                </ul>
              </SuspectInfo>

              <button onClick={handleEnding}>지목하기</button>
            </ClueData>
          </ClueContainer>
        </Modal>
      )}
    </Entry>
  );
};

const Entry = styled.section`
  width: 85%;
  height: 60%;
  text-align: center;
`;

const ClueData = styled.div`
  position: relative;
  padding: 1rem 6rem;
  line-height: 1.6;
  background-color: #fff;
  background-image: linear-gradient(
      90deg,
      transparent 80px,
      #abced4 80px,
      #abced4 81px,
      transparent 81px
    ),
    linear-gradient(#eee 0.1rem, transparent 0.1rem);
  background-size: 100% 1.2rem;

  img {
    width: 25%;
    position: absolute;
    right: 6%;
    box-shadow: 2px 1px 3px var(--light-grey-color);
  }

  ul {
    padding-bottom: 20px;
  }

  div,
  li {
    font-size: 1.3rem;
  }

  h3 {
    width: 60%;
    border-bottom: 1px solid var(--black-color);
    font-size: 1.8rem;
  }

  span {
    padding-right: 10px;
    font-weight: 700;
  }

  button {
    padding: 15px 20px;
    background-color: var(--black-color);
    color: var(--white-color);
    font-family: var(--noto-sans-kr-font);

    font-size: var(--middle-font-size);
    font-weight: 500;
  }
`;

const SuspectInfo = styled.div``;

const ClueContainer = styled.div`
  width: 80%;
  height: 80vh;
  background-color: white;
  text-align: left;
  overflow-y: scroll;
`;

const TextBox = styled.div`
  padding-bottom: 3rem;
`;

export default Suspects;
