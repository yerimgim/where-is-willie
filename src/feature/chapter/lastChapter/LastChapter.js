import React from "react";

// import { IoMdPaper } from "react-icons/io";
import styled from "styled-components";

// import Icon from "../../../common/components/Icon";

import Suspects from "./Suspects";

const LastChapter = () => {
  return (
    <Entry>
      {/* <Icon text="사건 파일" onClick={closeModal} type="close"> */}
      {/* <IoMdPaper size="30px" /> */}
      {/* </Icon> */}

      <Content>
        <Suspects />
      </Content>
    </Entry>
  );
};

const Entry = styled.main`
  width: 100%;
  height: 100vh;
  background: url("assets/paper.png");
  border: 25px solid var(--yellow-color);
  box-sizing: border-box;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default LastChapter;
