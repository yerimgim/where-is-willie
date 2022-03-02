import React from "react";

import styled from "styled-components";

const StyledTextarea = ({ placeholder, onChange, value }) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        autoFocus
      ></Textarea>
    </>
  );
};

const Textarea = styled.textarea`
  width: 82%;
  height: 80px;
  border: 1px solid #333;
  position: relative;
  left: 13px;
  line-height: 15px;
`;

export default StyledTextarea;
