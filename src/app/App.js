import React, { useEffect } from "react";

import { useBeforeunload } from "react-beforeunload";
import { Router, useHistory, Route, Switch } from "react-router-dom";

import Notfound from "../common/components/Notfound";
import constants from "../common/utils/constants";
import history from "../common/utils/history";
import MainHiddenChapter from "../feature/chapter/hiddenChapter/MainHiddenChapter";
import SecondHiddenChapter from "../feature/chapter/hiddenChapter/SecondHiddenChapter";
import LastChapter from "../feature/chapter/lastChapter/LastChapter";
import MainChapter from "../feature/chapter/mainChapter/MainChapter";
import MainStory from "../feature/chapter/mainChapter/MainStory";
import SecondChapter from "../feature/chapter/secondChapter/SecondChapter";
import ThirdChapter from "../feature/chapter/thirdChapter/ThirdChapter";
import Ending from "../feature/ending/Ending";
import Main from "../feature/main/Main";

function App() {
  const routerHistory = useHistory();

  useBeforeunload((event) => {
    event.preventDefault();
  });

  useEffect(() => {
    routerHistory.push(constants.ROUTE_MAIN);
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path={constants.ROUTE_MAIN} component={Main} exact />
        <Route path="/mainStory" component={MainStory} />
        <Route path="/mainChapter" component={MainChapter} />
        <Route path="/mainHiddenChapter" component={MainHiddenChapter} />
        <Route path="/secondChapter" component={SecondChapter} />
        <Route path="/SecondHiddenChapter" component={SecondHiddenChapter} />
        <Route path="/thirdChapter" component={ThirdChapter} />
        <Route path="/lastChapter" component={LastChapter} />
        <Route path="/ending" component={Ending} exact />
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
