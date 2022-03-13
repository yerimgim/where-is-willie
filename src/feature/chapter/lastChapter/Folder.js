import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const Folder = ({ onClick, personInfo }) => {
  const handleWrapperClick = () => {
    onClick(personInfo);
  };

  return (
    <Entry>
      <div className="suspect" onClick={handleWrapperClick}>
        <span>{personInfo.no}</span>
        <div className="img-box">
          <img src={personInfo.img} alt="용의자 이미지" />
        </div>
        <h3>{personInfo.name}</h3>
      </div>
    </Entry>
  );
};

const Entry = styled.section`
  display: inline-flex;
  flex-wrap: nowrap;
  width: 20%;
  text-align: center;

  h2 {
    font-size: 35px;
    padding-bottom: 10px;
  }

  .suspect {
    width: 100%;
    margin: 0 2%;
    padding-top: 10px;
    background-color: var(--white-color);

    h3 {
      padding: 10px;
      background-color: var(--yellow-color);
    }

    &:hover {
      border: 3px solid var(--yellow-color);
    }
  }
`;

Folder.propTypes = {
  closeModal: PropTypes.func,
};

export default Folder;
