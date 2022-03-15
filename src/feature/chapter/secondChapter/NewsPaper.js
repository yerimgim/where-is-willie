import React from "react";

import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import styled, { keyframes } from "styled-components";

import Icon from "../../../common/components/Icon";
import constants from "../../../common/utils/constants";

const NewsPaper = ({ onClick }) => {
  return (
    <Paper>
      <Icon onClick={onClick} type="close" text="닫기">
        <IoMdClose />
      </Icon>

      <Main>
        <h1>The Detactive Times</h1>

        <aside>
          <div className="issue">ISSUE #1</div>
          <div className="date">FRIDAY, 16 MAY, XXXX</div>
          <div className="no">No.1210</div>
        </aside>

        <h2 className="main-title">
          세계 최대 미술품 도난 사건: <br />
          람브람스의 작품을 도난 당하다.
        </h2>

        <div className="main-article">
          <p>
            <span> 지난 15일 오후 10시 11분경 </span>, A 미술관에서 사상 최대의
            미술품으로 인정받고 있는 람브람스의 대작이 사라졌다. 도난 당한
            람브람스의 대작은 1억 6천만 달러로 추정되며 한화로 1550억원에 달하는
            것으로 알려져 있다. 이번 도난 사건이 화제를 모으고 있는 이유는 지난
            7일 B 미술관에서도 악센트스의 유화 2점(300만 달러 상당)이 도난
            사건이 발생한지 얼마 되지 않아 도난 사건이 발생했다는 점에 았다.
            경찰은 범인으로 윌리(가명)을 쓰는 비밀에 감싸여진 도둑으로 추정하고
            있다고 알려왔다. 당시 범인은 경찰관으로 위장해 미술관에 들어와
            경비원을 묶어두고 미술품으로 훔친 것으로 알려왔다.
            <span>
              경비원의 증언에 따르면 범인이 도주 중 차고 있던 손목 시계가
              깨졌다고 알려왔다.
            </span>
          </p>
        </div>
        <a href="#" className="picture">
          <img src="assets/main.png" height="100%" />
        </a>
        <div className="sub-article">
          <h3>경찰은 무엇을 하고 있는가?</h3>
          <p>
            미술품이 도난당한지 이틀이 지난 지금까지도 단서조차 찾지 못한
            경찰들을 향한 비난이 잇따르고 있다. 관계자들은 경찰들이 사건과
            범인에 대해 모르고 무책임하며 불성실하다며 지적했다. 이 같은 여론이
            나오는 이유는 도난 범죄의 심각성이 갈수록 심화하고 있어서다. 조사한
            바로 도난 사건 재범률은 23%에서 35%로 늘었다. 도난 범죄를 예방하기
            위한 정부의 노력에도 갈수록 범죄가 점차 고도화되고 반복적으로
            이뤄진다는 게 전문가들의 분석이다. 이에 맞서 경찰은 범인을 찾기 위해
            모든 인력을 동원하고 있다고 주장했다. 또한 경찰은 오래된 작품일 수
            록 조심을 페인팅이 벗겨질 가능성이 높아 범인에게 오래된 종이의
            냄새와 페인트 자국이 남아있을 것이라 추측했다.
          </p>
        </div>
        <div className="side-middle-article">
          <h3>B 미술관에서 사라졌다 돌아온 작품은 무엇인가?</h3>
          <p>
            악센트스의 작품 중 하나인 이 작품은 범죄 조직들에 악용되어
            사용되었던 것으로 알려왔다. 당시 일간지들은 강도죄로 수감된 조폭
            두목이 사건에 연루돼있다고 보도했었다. 이른바 예술 작품을 볼모로 한
            예술 테러리즘 사건으로 작품의 행방과 복귀 협상을 주선하는 대가로
            사면, 감형을 받으려는 의도가 담겨있다. 이번 사건과도 연루돼있는
            것으로 추측했다.
          </p>
        </div>
        <div className="side-last-article">
          <a href="#" className="picture">
            <img src={constants.ASSETS_POSTER_IMG} alt="포스터 이미지" />
          </a>
        </div>
        <div className="artwork-info">
          <a href="#">
            <img src="assets/main.png" height="10%" alt="광고 이미지" />
          </a>
        </div>

        <div className="side-bar">
          <h3>사라진 람브람스의 예술품</h3>
          <div>
            <a href="#" className="picture">
              <img src={constants.ASSETS_MASTERPIECE_IMG} alt="그림 이미지" />
            </a>
            <p>
              세계적인 화가 람브람스의 작품은 도시 에서 옮겨져 6월 10일부터 8월
              31일까지 C 사립미술관에서 진행되는 교류전에 전시될 예정이었다. 첫
              교류 전시를 여는 람브람스의 대표 작품인 가제와 함께 유화 작품
              3점이 함께 전시되고 또한 작품의 탄생 과정과 제작 방법 또한 엿볼 수
              있는 스케치 작품들 총 15점이 함께 전시될 예정이었다. 람브람스는
              특이한 질감과 특정 색인 파란색 계열, 변형된 구조와 독특한 터치를
              사용하는 것으로 잘 알려져 있으며 오로지 미술 작품으로만 세상과
              소통하며 작가의 감성이 메말라갈 때에도 순수하게 예술에만 의지하며
              미술 작품을 계속해서 탄생시켰다. 그러한 과정을 거쳐 세상에 나온
              주옥같은 작품들을 통해 그의 예술적 힘과 신념을 만나볼 수 있을
              것이다.
            </p>
          </div>

          <div className="center">
            <h3>C 사립 미술관 입장표명</h3>
            <p>
              6월 10일 교류전 예정이었던 C 사립 미술관은 이 사건에 우려를
              표했다. C 사립 미술관장인 네언디슨은 A 미술관장과 협의하에 범인에
              대해 현상금을 내 걸 예정이라고 밝혀왔다.
            </p>
          </div>
          <div className="last-artcle">
            <h3>예술품 도난 범죄 급증</h3>
            <p>
              미술품, 예술품 관련된 범죄는 도난, 강도, 밀수 등으로 매우
              다양하지만 이중에서 가장 주목하고 해결하고자 하는 분야는 도난 된
              작품의 회수라고 한다. 한 해 도난당한 미술 가격은 약 2억 달러에
              이르고 있으며, 이 같은 도난 미술품들이 본 주인에게 되돌아올 확률은
              10% 미만에 그치는 것으로 알려져 왔다.
            </p>
          </div>
        </div>
      </Main>
    </Paper>
  );
};

const showPaper = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
`;

const Paper = styled.div`
  width: 80%;
  height: 80%;
  background: url("assets/paper.png") center center no-repeat;
  background-size: cover;
  color: var(--blue-color);
  font-family: var(--nanum-myenogjo-font);
  animation: ${showPaper} 2s ease-in-out;
  overflow-y: scroll;

  &:hover {
    font-weight: bold;
  }

  .click-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  button {
    background: var(--blue-color);
    padding: 10px;
    font-size: 35px;
    color: var(--white-color);
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 23%;
  grid-template-rows: repeat(5, auto);
  grid-gap: 1.5rem;
  margin: 20px 25px;

  h1 {
    grid-column: 1 / -1;
    padding-top: 30px;
    border-top: thick double var(--blue-color);
    font-size: 6rem;
    text-align: center;
  }

  aside {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: thick double var(--blue-color);
    border-bottom: thick double var(--blue-color);
  }

  .main-title {
    grid-column: 1 / -2;
    font-size: 3rem;
  }

  .main-article {
    grid-column: span 1;
    column-count: 1;
    column-gap: 1.3rem;
  }

  .picture {
    grid-column: 2 / span 3;
  }

  .sub-article {
    grid-column: 1 / span 2;
    border: 1px solid var(--blue-color);
  }

  .side-bar {
    grid-row: 3/6;
    grid-column: 5/6;
    padding-left: 1rem;
    border-left: 1px solid var(--blue-color);

    img {
      filter: grayscale(100%);
      transition: all 0.3s ease-in-out;

      &:hover {
        filter: grayscale(0%);
      }
    }
  }

  .artwork-info {
    grid-column: 1 / -1;
    grid-row: 6;
    padding-top: 1rem;
    border-top: 1px solid var(--blue-color);

    img {
      height: 100px;
    }
  }
`;

NewsPaper.propTypes = {
  closeModal: PropTypes.func,
};

export default NewsPaper;
