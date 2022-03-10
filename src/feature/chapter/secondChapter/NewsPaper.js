import React from "react";

import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import Button from "../../../common/components/Button";

const NewsPaper = ({ onClick }) => {
  return (
    <Paper>
      <Button onClick={onClick} text="X" />
      <Main>
        <h1>The Detactive Times</h1>

        <aside>
          <div className="issue">ISSUE #1</div>
          <div className="date">FRIDAY, 16 MAY, XXXX</div>
          <div className="no">No.1210</div>
        </aside>

        <h2 className="main-title">
          세계 최대 미술품 도난 사건: <br />
          람브람스의 첫번째 작품을 도난 당하다.
        </h2>

        <div className="main-article">
          <p>
            지난 15일, A 미술관에서 사상 최대의 미술품으로 인정받고 있는
            람브람스의 대작이 사라졌다. 도난 당한 람브람스의 대작은 1억 6천만
            달러로 추정되며 한화로 1550억원에 달하는 것으로 알려져 있다. 이번
            도난 사건이 화제를 모으고 있는 이유는 지난 7일 B 미술관에서도
            악센트스의 유화 2점(300만 달러 상당)이 도난 사건이 발생한지 얼마
            되지 않아 도난 사건이 발생했다는 점에 았다. 경찰은 범인으로
            윌리(가명)을 쓰는 비밀에 감싸여진 도둑으로 추정하고 있다고 알려왔다.
            당시 범인은 경찰관으로 위장해 미술관에 들어와 경비원을 묶어두고
            미술품으로 훔친 것으로 알려왔다. 이에 미술품을 되찾기 위해 B
            미술관은 범인에 대한 현상금 3억달러를 내걸었다. 두 건의 이은 미술품
            도난 사건에 우려가 높아지고 있다.
          </p>
        </div>
        <a href="#" className="picture">
          <img src="assets/main.png" height="100%" />
        </a>
        <div className="sub-article">
          <h2>경찰은 무엇을 하고 있는가?</h2>
          <p>
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
        <div className="side-middle-article">
          <h2>유명 화가의 예술품을 훔친자는 누구인가?</h2>
          <p>
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
        <div className="side-last-article">
          <a href="#" className="picture">
            <img src="assets/newspaper/poster.jpg" />
          </a>
        </div>
        <div className="advertisement">
          <a href="#">
            <img src="assets/main.png" height="10%" />
          </a>
        </div>

        <div className="side-bar">
          <h3>example1</h3>
          <div>
            <a href="#" className="picture">
              <img src="assets/main.png" />
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <a href="#">
              <h3>example2</h3>
              <p>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </a>
          </div>

          <div>
            <a href="#">
              <h3>example3</h3>
              <p>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </a>
          </div>
          <div className="last-artcle">
            <a href="#">
              <h3>example4</h3>
              <p>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </a>
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

  .click-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  button {
    padding: 10px;
    background: var(--blue-color);
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

    h2 {
      background-color: var(--blue-color);
      color: white;
    }
  }

  .side-bar {
    grid-row: 3/6;
    grid-column: 5/6;
    padding-left: 1rem;
    border-left: 1px solid var(--blue-color);

    div {
      padding: 0.5rem 0;
    }
  }

  .advertisement {
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
