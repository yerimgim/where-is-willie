import React, { useState } from "react";

import { AiTwotoneBulb } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { getResult } from "../../modules/quizSlice";
import makeKey from "../utils/makeKey";
import NumberLine from "./NumberLine";
import StyledTextarea from "./StyledTextarea";

const Quiz = ({ setValue, value, quiz }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const result = useSelector((state) => state.quiz.result);

  const finalResult = result
    ? result.replace(/\s/g, "").match(/[^;]/g).join("").trim()
    : null;

  const goNextChapter = (event) => {
    event.preventDefault();

    if (quiz.answer === finalResult) {
      history.push({
        pathname: quiz.success[0],
        state: { info: [quiz.success[1], quiz.successHint] },
      });
    } else {
      return history.push({
        pathname: quiz.fail[0],
        state: { info: [quiz.fail[1], quiz.failureHint] },
      });
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

  const [isToggle, setIsToggle] = useState(false);
  const toggleHint = () => {
    setIsToggle(!isToggle);
  };

  return (
    <QuizSection>
      <div className="img-box">
        <img src="/assets/file-folder.png" alt="파일 폴더 이미지" />
      </div>

      <div className="text-box">
        <div className="info-box">
          <h3>{quiz.willieInfos && quiz.willieInfo}</h3>
          <ul>
            {quiz.willieInfos &&
              quiz.willieInfos.map((info) => {
                return <li key={makeKey()}>{info}</li>;
              })}
          </ul>
          <h3>임무</h3>
          <ul>
            <li>
              <span className="highlight">
                <span className="pen">{quiz.content}</span>
              </span>
            </li>
          </ul>

          <AiTwotoneBulb onClick={toggleHint} className="hint-icon">
            ㅇㅇㅇㅇㅇ
          </AiTwotoneBulb>

          <Link
            to={{ pathname: quiz.hint[1] }}
            target="_blank"
            className={isToggle ? "show-toggle" : "hide-toggle"}
          >
            <span className="hint">{quiz.hint[0]}</span>
          </Link>
        </div>
        <form>
          <MarkupBox>
            <NumberLine />
            <Markup>
              {quiz.cssBefore}
              <StyledTextarea
                placeholder={quiz.placeholder}
                onChange={onChange}
                value={value}
              />
              {quiz.cssAfter}
            </Markup>
          </MarkupBox>
          {isLoading || (
            <div className="submit-box">
              <input
                type="submit"
                onClick={handleClick}
                disabled={!value}
                value="확인"
              />
            </div>
          )}
        </form>

        {isLoading && (
          <div className="submit-box">
            <button onClick={goNextChapter} className="next-btn">
              계속
            </button>
          </div>
        )}
      </div>
    </QuizSection>
  );
};

const QuizSection = styled.section`
  position: relative;
  width: 45%;
  height: 100vh;
  font-family: var(--nanum-my-daughter-font);
  white-space: pre-wrap;

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

  .hint-icon {
    display: inline-block;
    cursor: pointer;
  }

  .show-toggle {
    display: inline-block;
  }

  .hide-toggle {
    display: none;
  }

  .submit-box {
    display: flex;
    justify-content: flex-end;
    width: 100%;
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

    li {
      font-size: var(--middle-font-size);
    }

    .info-box {
      margin-bottom: 5%;
    }

    .hint {
      padding: 3px;
      font-size: 16px;
      background-color: var(--light-grey-color);
      color: var(--white-color);
      font-family: var(--noto-sans-kr-font);
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

const Markup = styled.div`
  position: relative;
  left: 8%;
  display: flex;
  flex-direction: column;
`;

export default Quiz;
