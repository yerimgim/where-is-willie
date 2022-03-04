import React from "react";

import { Route, Switch, Link } from "react-router-dom";

import MainHiddenChapter from "../feature/chapter/hiddenChapter/MainHiddenChapter";
import SecondHiddenChapter from "../feature/chapter/hiddenChapter/SecondHiddenChapter";
import LastChapter from "../feature/chapter/lastChapter/LastChapter";
import MainChapter from "../feature/chapter/mainChapter/MainChapter";
import SecondChapter from "../feature/chapter/secondChapter/SecondChapter";
import ThirdChapter from "../feature/chapter/thirdChapter/ThirdChapter";
import DeadEnding from "../feature/ending/DeadEnding";
import Success from "../feature/ending/Success";
import Main from "../feature/main/Main";

function App() {
  return (
    <>
      <ul>
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
      </ul>
      <Switch>
        <Route path="/" exact>
          <Main />
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
          <h1>범인 검거 페이지</h1>
          <LastChapter />
        </Route>
        <Route path="/ending" exact>
          <h1>엔딩 페이지</h1>
          <Success />
        </Route>
        <Route path="/ending/deadEnding">
          <h1>죽음엔딩 페이지</h1>
          <DeadEnding />
        </Route>
      </Switch>
    </>
  );
}

export default App;
