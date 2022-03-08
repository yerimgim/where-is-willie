import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import letter from "../../../data/letter.json";

const Letter = ({ closeModal }) => {
  const user = useSelector((state) => state.user.name);
  const history = useHistory();

  const onClick = () => {
    closeModal;
    history.push("/mainChapter");
  };

  return (
    <Entry>
      <div className="book">
        <div className="cover"></div>
        <div className="page"></div>
        <div className="page first-page">
          <img src="/assets/steam-train.jpg" />
        </div>

        <div className="last-page">
          <div className="button-box">
            <button onClick={onClick}>X 닫기</button>
          </div>
          <h4>안녕하세요, {user} 탐정님</h4>
          <div className="content">{letter.content}</div>
        </div>

        <div className="back-cover"></div>
      </div>
    </Entry>
  );
};

const Entry = styled.div`
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
    background: url("assets/left-folder.png") no-repeat center;
    background-size: contain;
    filter: drop-shadow(1px 1px 3px var(--black-color));
  }

  .back-cover {
    z-index: -2;
    background: url("assets/right-folder.png") no-repeat center;
    background-size: contain;
  }

  .cover,
  .back-cover {
    position: absolute;
    width: 40%;
    height: 100%;
    border-radius: 2px 20px 20px 2px;
    transform: rotateX(10deg);
    transform-origin: center left;
  }

  .page,
  .last-page {
    position: absolute;
    width: 35%;
    height: 75%;
    border-radius: 2px 10px 10px 2px;
    background-color: var(--white-color);
    transform: rotateX(10deg);
    transform-origin: center left;
    z-index: -1;
  }

  .page:nth-child(2) {
    transition-duration: 0.1s;
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

  .last-page {
    font-size: 28px;
    line-height: 60px;
  }

  .last-page h4 {
    margin: 10px 40px;
  }

  .last-page .content {
    margin: 40px;
  }

  .button-box {
    text-align: right;

    button {
      padding: 20px;
      font-size: 30px;
    }
  }
`;

Letter.propTypes = {
  closeModal: PropTypes.func,
};

export default Letter;
