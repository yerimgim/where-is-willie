import { createGlobalStyle } from "styled-components";
import "../styles/fonts/font.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --nanum-myenogjo-font: "NanumMyenogjo", sans-serif;
    --black-hans-Sans-font: "BlackHansSans", sans-serif;
    --nanum-guri-font: "nanum-guri-diary", sans-serif;
    --noto-sans-kr-font: "NotoSansKr", sans-serif;
    --nanum-my-daughter-font :"NanumMyDaughter", sans-serif;

    --black-color: #070400;
    --light-grey-color: #C4C4C4;
    --yellow-color: #FED548;
    --white-color: #fff;

    --middle-font-size: 22px;
  }

  * {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
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
`;

export default GlobalStyle;
