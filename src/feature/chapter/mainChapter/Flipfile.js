import React from "react";

import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Icon from "../../../common/components/Icon";
import constants from "../../../common/utils/constants";
import letter from "../../../data/letter.json";
import { File, Cover, Page, LastPage, BackCover } from "./FlipfileElement";

const Flipfile = () => {
  const user = useSelector((state) => state.user.name);
  const history = useHistory();

  const onClick = () => {
    history.push({
      pathname: letter.success[0],
      state: { info: [letter.success[1], letter.successHint] },
    });
  };

  return (
    <File>
      <Cover />
      <Page></Page>

      <Page>
        <img src={constants.ASSETS_STEAM_TRAIN} alt="기차 이미지" />
      </Page>

      <LastPage>
        <Icon text="닫기" onClick={onClick} type="close">
          <IoMdClose />
        </Icon>

        <h4>안녕하세요, {user} 탐정님</h4>
        <div className="content">{letter.content}</div>
        <p className="notification">
          상단의 <IoMdClose />
          닫기 버튼을 누르면 게임이 시작됩니다.
        </p>
      </LastPage>
      <BackCover></BackCover>
    </File>
  );
};

export default Flipfile;
