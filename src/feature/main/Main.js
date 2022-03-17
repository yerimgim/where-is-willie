import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { getUserName } from "../../modules/nameSlice";
import { fadeIn, shake } from "../../styles/keyframes/keyframes";

const Main = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/mainStory");
  };

  const onChange = (event) => {
    setValue(event.target.value);
    dispatch(getUserName(event.target.value));
  };

  return (
    <MainContent>
      <Section>
        <span>유명 화가의 예술품을 훔친</span>
        <h1 className="typing-title">윌리를 찾아서</h1>
        <form>
          <input
            className="text-box"
            type="text"
            value={value}
            onChange={onChange}
            maxLength="10"
            placeholder="이름을 입력해주세요."
            data-testid="add-input"
          />
          <button
            className="submit-button"
            type="button"
            disabled={!value}
            onClick={handleClick}
          >
            게임 시작하기
          </button>
        </form>
      </Section>
    </MainContent>
  );
};

const MainContent = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  background: beige;
  background-image: url("/assets/main.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${fadeIn} 1s ease-in-out;

  @media screen and (max-width: 768px) {
    background-image: url("/assets/error.png");
  }
`;

const Section = styled.section`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 50%;
  padding: 35px;

  span {
    font-size: var(--middle-font-size);
  }

  h1 {
    font-family: var(--black-hans-Sans-font);
    font-size: 4.5rem;
    font-weight: 400;
  }

  .text-box {
    display: block;
    width: 60%;
    margin: 20px 0;
    padding: 10px 0;
    border-bottom: 2px solid var(--light-grey-color);

    &:focus {
      outline: none;
    }
  }

  .submit-button {
    padding: 15px 20px;
    background: var(--yellow-color);
    font-family: var(--noto-sans-kr-font);
    color: var(--black-color);
    font-size: var(--middle-font-size);
    font-weight: 500;
  }

  button:disabled,
  button[disabled] {
    background-color: var(--black-color);
    color: var(--white-color);
    transition: all 0.6s ease-in-out;

    &:hover {
      animation: ${shake} 0.8s cubic-bezier(0.5, 0.3, 0.5, 1);
    }
  }

  @media all and (max-width: 768px) {
    top: 50%;
    left: 50%;
    width: 80%;
    color: var(--white-color);
    text-align: center;
    transform: translate(-50%, -50%);
    transition: all 0.3 ease-out;

    h1:after {
      content: "게임 불가!";
    }

    form {
      display: none;
    }

    span {
      display: none;
    }
  }
`;

export default Main;
