import React from "react";

import { Route, Switch } from "react-router-dom";

import MainHiddenChapter from "../feature/chapter/hiddenChapter/MainHiddenChapter";
import SecondHiddenChapter from "../feature/chapter/hiddenChapter/SecondHiddenChapter";
import LastChapter from "../feature/chapter/lastChapter/LastChapter";
import MainChapter from "../feature/chapter/mainChapter/MainChapter";
import MainStory from "../feature/chapter/mainChapter/MainStory";
import SecondChapter from "../feature/chapter/secondChapter/SecondChapter";
import ThirdChapter from "../feature/chapter/thirdChapter/ThirdChapter";
import Failure from "../feature/ending/Failure";
import Success from "../feature/ending/Success";
import Main from "../feature/main/Main";

function App() {
  return (
    <>
      {/* <ul>
        <li>
          <Link to="/">로그인페이지</Link>
        </li>
        <li>
          <Link to="/mainChapter">어두운 복도</Link>
        </li>
        <li>
          <Link to="/mainHiddenChapter">어두운 복도 (히든 페이지)</Link>
        </li>
        <li>
          <Link to="/secondChapter">탐정의 열차칸</Link>
        </li>
        <li>
          <Link to="/secondHiddenChaper">3B Jack의 방(히든 페이지)</Link>
        </li>
        <li>
          <Link to="/thirdChapter">식당 칸</Link>
        </li>
        <li>
          <Link to="/lastChapter">범인 검거</Link>
        </li>
        <li>
          <Link to="/ending">엔딩</Link>
        </li>
        <li>
          <Link to="/ending/deadEnding">??</Link>
        </li>
      </ul> */}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/mainStory">
          <MainStory />
        </Route>
        <Route path="/mainChapter">
          <MainChapter />
        </Route>
        <Route path="/mainHiddenChapter">
          <MainHiddenChapter />
        </Route>
        <Route path="/secondChapter">
          <SecondChapter />
        </Route>
        <Route path="/secondHiddenChaper">
          <SecondHiddenChapter />
        </Route>
        <Route path="/thirdChapter">
          <ThirdChapter />
        </Route>
        <Route path="/lastChapter">
          <LastChapter />
        </Route>
        <Route path="/ending" exact>
          <Success />
        </Route>
        <Route path="/ending/fail">
          <Failure />
        </Route>
      </Switch>
    </>
  );
}

export default App;
