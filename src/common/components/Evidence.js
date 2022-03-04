import React, { useState, useEffect } from "react";

import styled from "styled-components";

const Evidence = ({ summay }) => {
  const txt = summay;
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);

    if (count === txt.length) {
      clearTimeout(interval);
    }
    return () => clearTimeout(interval);
  });

  return (
    <Entry>
      <div>{text}</div>
    </Entry>
  );
};

const Entry = styled.div`
  div {
    position: absolute;
    width: 50%;
    top: 50%;
    transform: translateY(-50%);
    left: 55%;

    color: var(--white-color);
    font-size: 25px;
  }
`;

export default Evidence;
