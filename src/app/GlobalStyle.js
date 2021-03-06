import { createGlobalStyle } from "styled-components";
import "../styles/fonts/font.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --nanum-myenogjo-font: "NanumMyenogjo", sans-serif;
    --black-hans-Sans-font: "BlackHansSans", sans-serif;
    --nanum-guri-font: "nanum-guri-diary", sans-serif;
    --noto-sans-kr-font: "NotoSansKr", sans-serif;
    --nanum-my-daughter-font : "NanumMyDaughter", sans-serif;
    --lora-font: "Lora", sans-serif;

    --black-color: #070400;
    --light-grey-color: #C4C4C4;
    --yellow-color: #FED548;
    --white-color: #fff;
    --blue-color: #111039;

    --middle-font-size: 22px;
  }

  * {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    user-select:none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    border: 0;
    vertical-align: middle;
  }

  h2 {
    font-size: 2.2rem;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  input[type="submit"] {
    cursor: pointer;
  }
`;

export default GlobalStyle;
