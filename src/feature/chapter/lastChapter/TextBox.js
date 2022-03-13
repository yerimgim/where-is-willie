import React from "react";

import styled from "styled-components";

const TextBox = () => {
  return (
    <Header>
      <h2>최종 범인 지목</h2>
      <p>
        윌리로 추정되는 유력한 용의자 5명을 소환하였습니다.
        <br />
        현장에서 찾은 단서와 용의자의 특이 사항을 참고하여 범인을 지목해주세요.
      </p>
    </Header>
  );
};

const Header = styled.div`
  padding-bottom: 3rem;

  h2 {
    padding: 0.5rem 0;
  }
`;

export default TextBox;
