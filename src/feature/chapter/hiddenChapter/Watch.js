import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Watch = ({ onClick }) => {
  return (
    <Main>
      <img src="assets/watch.png" onClick={onClick} />
      <p>시계이다</p>
    </Main>
  );
};

const Main = styled.div`
  position: absolute;

  img {
    width: 30%;
  }
`;

Watch.propTypes = {
  onClick: PropTypes.func,
};

export default Watch;
