import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { getClue } from "../../modules/quizSlice";

const Evidence = ({ summary }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClue(summary[1]));
  }, [summary[1]]);

  return (
    <Entry>
      <h1 className="ending">{Text}</h1>
      {summary.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </Entry>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Entry = styled.ul`
  position: absolute;
  top: 40%;
  left: 58%;
  transform: translateY(-50%);
  font-family: var(--noto-sans-kr-font);
  animation: ${fadeIn} 2s ease-in-out;

  li:first-of-type {
    font-size: 2.2rem;
    font-weight: bold;
  }

  li {
    width: 100%;
    padding: 10px 0;
    color: var(--white-color);
    font-size: 1.6rem;
    list-style: none;
    line-height: 1.6;
    white-space: pre-wrap;
  }
`;

Evidence.propTypes = {
  summary: PropTypes.array,
};

export default Evidence;
