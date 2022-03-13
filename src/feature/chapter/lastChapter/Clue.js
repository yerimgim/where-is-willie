import React from "react";

import styled from "styled-components";

const Clue = ({ infos, clueInfo, handleEnding, inference }) => {
  return (
    <ClueData>
      <h2>단서</h2>
      <img src={infos.img} alt="범인 이미지" />
      <ul>
        <h3>공통 정보</h3>
        <li>
          <b>사건</b>람브람스의 예술품 도난 사건
        </li>
        <li>
          <b>사건 발생 시각</b> FRIDAY, 15 MAY, XXXX
        </li>
        <li>
          <b>사건 발생 장소</b> 미술관 람브람스의 전시관
        </li>
      </ul>

      <SuspectInfo>
        <h3>유력 용의자 특이 사항 - {infos.name}</h3>
        <ul>
          {infos.infos.map((suspectData, index) => {
            return <li key={index}>{suspectData}</li>;
          })}
        </ul>
      </SuspectInfo>

      <ul>
        <h3>현장에서 찾은 단서</h3>
        {clueInfo &&
          clueInfo.map((clue, index) => {
            return <li key={index}>{clue}</li>;
          })}
        <h4>{inference}</h4>
      </ul>

      <button onClick={handleEnding}>지목하기</button>
    </ClueData>
  );
};

const ClueData = styled.div`
  position: relative;
  padding: 1rem 7rem;
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
  line-height: 1.6;
  font-size: 1.3rem;

  img {
    width: 25%;
    position: absolute;
    right: 7%;
    box-shadow: 2px 1px 3px var(--light-grey-color);
  }

  ul {
    padding-bottom: 20px;
  }

  li {
    list-style: disc;
  }

  h3 {
    width: 60%;
    border-bottom: 1px solid var(--black-color);
    font-size: 1.8rem;
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

export default Clue;
