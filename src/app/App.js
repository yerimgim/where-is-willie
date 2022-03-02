import React from "react";

import { Route, Switch, Link } from "react-router-dom";

import MainHiddenChapter from "../feature/chapter/hiddenChapter/MainHiddenChapter";
import SecondHiddenChapter from "../feature/chapter/hiddenChapter/SecondHiddenChapter";
import LastChapter from "../feature/chapter/lastChapter/LastChapter";
import MainChapter from "../feature/chapter/mainChapter/MainChapter";
import SecondChapter from "../feature/chapter/secondChapter/SecondChapter";
import ThirdChapter from "../feature/chapter/thirdChapter/ThirdChapter";
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
          <Link to="/thirdChappter">식당 칸</Link>
        </li>
        <li>
          <Link to="/lastChapter">범인 검거</Link>
        </li>
        <li>
          <Link to="/ending">엔딩</Link>
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
        <Route path="/thirdChappter">
          <ThirdChapter />
        </Route>
        <Route path="/lastChapter">
          <h1>범인 검거 페이지</h1>
          <LastChapter />
        </Route>
        <Route path="/ending">
          <h1>엔딩 페이지</h1>
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
