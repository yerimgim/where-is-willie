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
      <Route path="/ending/failure">
        <Failure />
      </Route>
    </Switch>
  );
}

export default App;
