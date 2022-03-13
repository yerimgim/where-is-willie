import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Watch = ({ setModalOpen, modalOpen }) => {
  const onClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Main>
      <img src="assets/watch.png" onClick={onClick} />
      <p>
        고장난 시계를 발견하였다. <br />
        10시 11분을 가리키고 있다.
      </p>
    </Main>
  );
};

const Main = styled.div`
  position: absolute;
  left: 10%;
  width: 30%;

  img {
    width: 60%;
    padding: 2rem;
  }

  p {
    padding: 5px;
    background-color: var(--black-color);
    color: var(--white-color);
    text-align: center;
    font-size: 2rem;
  }
`;

Watch.propTypes = {
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
};

export default Watch;
