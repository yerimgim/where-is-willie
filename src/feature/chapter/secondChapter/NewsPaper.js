import React from "react";

import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const NewsPaper = ({ closeModal }) => {
  return (
    <Paper>
      <button onClick={closeModal}>XXX</button>
      <Main>
        <h1>The Detactive Times</h1>
        <aside>
          <div className="issue">ISSUE #1</div>
          <div className="date">FRIDAY, 16 MAY, XXXX</div>
        </aside>
        <h2>: 도난 당하다</h2>
        <p>추정 가치 1억달러</p>
      </Main>
    </Paper>
  );
};

const showPaper = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 100;
  }
`;

const Paper = styled.div`
  width: 100%;
  height: 100%;
  background: url("assets/paper.png") center center no-repeat;
  background-size: cover;
  color: var(--black-color);
  font-family: var(--nanum-myenogjo-font);
  animation: ${showPaper} 2s;

  button {
    padding: 10px;
    font-size: 35px;
    background: var(--black-color);
    color: var(--white-color);
  }
`;

const Main = styled.main`
  margin: 20px;

  h1 {
    border-top: 1px solid var(--black-color);
    padding: 30px 0;
    font-size: 6rem;
    text-align: center;
  }

  aside {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-top: thick double var(--black-color);
    border-bottom: thick double var(--black-color);
  }
`;

NewsPaper.propTypes = {
  closeModal: PropTypes.func,
};

export default NewsPaper;
