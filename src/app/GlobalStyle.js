import { createGlobalStyle } from "styled-components";
import "../styles/fonts/font.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --nanum-myenogjo-font: "NanumMyenogjo", sans-serif;
    --black-hans-Sans-font: "BlackHansSans", sans-serif;
    --nanum-guri-font: "nanum-guri-diary", sans-serif;
    --noto-sans-kr-font: "NotoSansKr", sans-serif;
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
`;

export default GlobalStyle;
