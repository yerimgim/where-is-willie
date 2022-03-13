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
        10시 11분을 가리키고있다.
      </p>
    </Main>
  );
};

const Main = styled.div`
  position: absolute;
  width: 30%;
  left: 10%;

  img {
    width: 60%;
    padding: 2rem;
  }

  p {
    text-align: center;
    padding: 5px;
    background-color: var(--black-color);
    font-size: 2rem;
    color: var(--white-color);
  }
`;

Watch.propTypes = {
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
};

export default Watch;
