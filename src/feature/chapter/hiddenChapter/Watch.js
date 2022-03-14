import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import constants from "../../../common/utils/constants";

const Watch = ({ setModalOpen, modalOpen }) => {
  const onClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Main>
      <img
        src={constants.ASSETS_WATCH_IMG}
        onClick={onClick}
        alt="고장난 시계 이미지"
      />
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
    cursor: pointer;
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
