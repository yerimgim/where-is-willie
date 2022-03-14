import React from "react";

import { AiTwotoneBulb } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "./Icon";

const Hint = ({ toggleHint, isToggle, quiz }) => {
  return (
    <HintContainer>
      <Icon text="Hint" onClick={toggleHint}>
        <AiTwotoneBulb className="hint-icon" />
      </Icon>
      <Link
        to={{ pathname: quiz.hint[1] }}
        target="_blank"
        className={isToggle ? "show-toggle" : "hide-toggle"}
      >
        <span className="hint">{quiz.hint[0]}</span>
      </Link>
    </HintContainer>
  );
};

const HintContainer = styled.div`
  display: flex;
  align-items: center;

  .show-toggle {
    visibility: visible;
  }

  .hide-toggle {
    visibility: hidden;
  }

  .hint {
    padding: 3px;
    background-color: var(--light-grey-color);
    color: var(--white-color);
    font-size: 1rem;
    font-family: var(--noto-sans-kr-font);
  }
`;

export default Hint;
