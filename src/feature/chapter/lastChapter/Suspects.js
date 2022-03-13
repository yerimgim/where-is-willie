import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../../common/components/Icon";
import Modal from "../../../common/components/modal/Modal";
import suspect from "../../../data/suspect.json";
import Clue from "./Clue";
import Folder from "./Folder";
import TextBox from "./TextBox";

const Suspects = ({ inference }) => {
  const [infos, setInfos] = useState({});
  const [isShow, setIsShow] = useState(false);
  const clueInfo = useSelector((state) => state.quiz.clues);
  const history = useHistory();

  const handleClose = () => {
    setIsShow(false);
  };

  const handleShow = (info) => {
    setIsShow(true);
    setInfos(info);
  };

  const handleEnding = () => {
    history.push({
      pathname: infos.success,
      state: { info: [null, infos.result] },
    });
  };

  return (
    <Entry>
      <TextBox />

      {suspect.suspect.map((person, index) => {
        return <Folder key={index} personInfo={person} onClick={handleShow} />;
      })}

      {isShow && (
        <Modal onClick={handleClose}>
          <ClueContainer>
            <Icon text="닫기" onClick={handleClose} type="close">
              <IoMdClose />
            </Icon>
            <Clue
              infos={infos}
              clueInfo={clueInfo}
              handleEnding={handleEnding}
              inference={inference}
            />
          </ClueContainer>
        </Modal>
      )}
    </Entry>
  );
};

const Entry = styled.section`
  width: 85%;
  height: 60%;
  text-align: center;
`;

const ClueContainer = styled.div`
  width: 80%;
  height: 80vh;
  background-color: white;
  text-align: left;
  overflow-y: scroll;
  font-family: var(--nanum-my-daughter-font);
`;

export default Suspects;
