import React from "react";

import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Icon from "../../../common/Icon";

const Folder = ({ onClick }) => {
  const clueInfo = useSelector((state) => state.quiz.clues);

  return (
    <Entry>
      <Icon text="닫기" onClick={onClick} type="close">
        <IoMdClose />
      </Icon>

      <ClueData>
        <h2>단서</h2>
        <img src="assets/masterpiece.png" alt="람브람스의 작품" />
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
          <h3>범인에 대한 단서</h3>
          {clueInfo &&
            clueInfo.map((clue, index) => {
              return <li key={index}>{clue}</li>;
            })}
        </ul>
      </ClueData>
    </Entry>
  );
};

const Entry = styled.div`
  width: 65%;
  height: 80%;
  background-color: #fff;
  background-image: linear-gradient(
      90deg,
      transparent 79px,
      #abced4 79px,
      #abced4 81px,
      transparent 81px
    ),
    linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;
  font-family: var(--noto-sans-kr-font);
  overflow-y: scroll;
`;

const ClueData = styled.div`
  position: relative;
  padding: 1rem 6rem;
  line-height: 1.6;

  img {
    width: 25%;
    position: absolute;
    right: 6%;
    box-shadow: 2px 1px 3px var(--light-grey-color);
  }

  ul {
    padding-bottom: 20px;
  }

  li {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  span {
    padding-right: 10px;
    font-weight: 700;
  }
`;

Folder.propTypes = {
  closeModal: PropTypes.func,
};

export default Folder;
