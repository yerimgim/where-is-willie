import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextarea = ({ placeholder, onChange, value }) => {
  return (
    <Textarea
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      autoFocus
    />
  );
};

const Textarea = styled.textarea`
  position: relative;
  left: 13px;
  width: 82%;
  height: 3rem;
  padding: 0.2rem;
  border: 1px solid #333;
  font-size: 1rem;
  font-family: var(--noto-sans-kr-font);
  overflow: hidden;
  resize: none;
`;

StyledTextarea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default StyledTextarea;
