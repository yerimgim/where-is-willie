import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";

import letter from "../../../data/letter.json";
import { selectUser } from "../../../modules/nameSlice";

const Letter = ({ closeModal }) => {
  const user = useSelector(selectUser);
  return (
    <Entry>
      <div className="book">
        <div className="cover"></div>
        <div className="page"></div>
        <div className="page first-page">
          <img src="/assets/steam-train.jpg" />
        </div>

        <div className="last-page">
          <button onClick={closeModal}>xXXXXXXX</button>
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
  }

  .back-cover {
    z-index: -2;
  }

  .cover,
  .back-cover {
    position: absolute;
    width: 40%;
    height: 90%;
    border-radius: 2px 20px 20px 2px;
    background-color: #e5e5e5;
    box-shadow: 1px 1px 10px var(--light-grey-color);
    transform: rotateX(10deg);
    transform-origin: center left;
  }

  .page,
  .last-page {
    position: absolute;
    width: 38%;
    height: 85%;
    border-radius: 2px 10px 10px 2px;
    background-color: var(--white-color);
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

  .last-page {
    font-size: 40px;
    line-height: 60px;
  }

  .last-page h4 {
    margin: 40px;
  }

  .last-page .content {
    margin: 40px;
  }
`;

export default Letter;
