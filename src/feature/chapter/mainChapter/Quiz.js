import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import NumberLine from "../../../common/components/NumberLine";
import quiz from "../../../data/mainChapterQuiz.json";
import { getResult } from "../../../modules/quizSlice";

const Quiz = ({ setValue, value }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const result = useSelector((state) => state.quiz.result);

  const finalResult = result ? result.match(/[^;]/g).join("").trim() : null;

  const goNextChapter = (event) => {
    event.preventDefault();

    if (quiz.answer === finalResult) {
      history.push(quiz.result);
    } else {
      history.push(quiz.fail);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsLoading(!isLoading);
    dispatch(getResult(value));
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <QuizSection>
        <div className="img-box">
          <img src="/assets/file-folder.png" alt="파일 폴더 이미지" />
        </div>

        <div className="text-box">
          <div className="info-box">
            <h3>윌리의 정보</h3>
            <ul>
              <li></li>
            </ul>
            <h3>임무</h3>
            <ul>
              <li>
                <span className="highlight">
                  <span className="pen">{quiz.content}</span>
                </span>
              </li>
            </ul>
          </div>
          <form>
            <MarkupBox>
              <NumberLine />
              <Pre>
                {quiz.cssBefore}
                <StyledTextarea
                  placeholder="/* use display property */"
                  onChange={onChange}
                  value={value}
                  autoFocus
                />
                {quiz.cssAfter}
              </Pre>
            </MarkupBox>
            {isLoading || (
              <input type="submit" onClick={handleClick} value="확인" />
            )}
          </form>

          {isLoading && (
            <button onClick={goNextChapter} className="next-btn">
              계속
            </button>
          )}
        </div>
      </QuizSection>
    </>
  );
};

const QuizSection = styled.section`
  position: relative;
  width: 45%;
  height: 100vh;
  font-family: var(--nanum-my-daughter-font);

  .img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 95%;
      height: 93vh;
    }
  }

  .next-btn {
    width: 30%;
    margin: 10px 0;
    padding: 10px 0;
    background-color: var(--black-color);
    color: var(--white-color);
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 160px;
    left: 15%;
    width: 60%;

    .info-box {
      margin-bottom: 5%;
    }

    h3 {
      margin-bottom: 10px;
      font-size: 30px;
    }

    li {
      margin-bottom: 10px;
    }

    input[type="submit"] {
      width: 30%;
      margin: 10px 0;
      padding: 10px 0;
      color: var(--white-color);
      background-color: var(--black-color);
    }

    .highlight {
      transition: 0.35s ease-in-out;
      word-break: keep-all;
    }

    .highlight .pen {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 50%,
        var(--yellow-color) 50%
      );
      background-size: 200%;
      transition: 0.5s;
    }

    .info-box:hover .highlight .pen {
      background-position: -100% 0;
    }
  }
`;

const MarkupBox = styled.div`
  position: relative;
  border: 1px solid var(--black-color);
  font-family: var(--noto-sans-kr-font);
  overflow: hidden;
`;

const Pre = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 8%;
`;

const StyledTextarea = styled.textarea`
  width: 82%;
  height: 80px;
  border: 1px solid #333;
  position: relative;
  left: 13px;
  line-height: 15px;
`;

export default Quiz;
