import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Notfound = () => {
  return (
    <Main>
      <div className="text">
        <h2>Page Not Found</h2>
        <p>
          <span>해당 페이지</span>를 찾을 수 없습니다.
        </p>
        <Link to="/">메인페이지</Link>
      </div>
      <img src="assets/error.png" alt="에러 페이지 이미지" />
    </Main>
  );
};

const Main = styled.main`
  position: relative;

  .text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    color: var(--white-color);
    text-align: center;

    p {
      font-size: 25px;
      padding: 20px;
    }

    span {
      color: var(--yellow-color);
    }
  }

  a {
    color: var(--white-color);
    text-decoration: none;
    font-size: 18px;
  }

  img {
    height: 100vh;
  }
`;

export default Notfound;
