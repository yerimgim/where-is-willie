import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/mainChapter");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <MainContent>
        <Section>
          <span>유명 화가의 예술품을 훔친</span>
          <h1>윌리를 찾아서</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="text-box"
              type="text"
              value={value}
              onChange={onChange}
              placeholder="이름을 입력해주세요."
            />
            <input
              className="submit-button"
              type="submit"
              value="게임 시작하기"
            />
          </form>
        </Section>
      </MainContent>
    </>
  );
};

const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  background: beige;
  position: relative;
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
    font-size: 73px;
    font-weight: 400;
  }

  .text-box {
    display: block;
    width: 60%;
    margin: 20px 0;
    padding: 10px 0;
    border-bottom: 2px solid var(--light-grey-color);
  }

  .submit-button {
    padding: 15px 20px;
    background: var(--black-color);
    font-family: var(--noto-sans-kr-font);
    color: white;
    font-size: var(--middle-font-size);
    font-weight: 500;
    cursor: pointer;
  }
`;

export default Main;
