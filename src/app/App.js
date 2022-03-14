// import React from "react";

// import { Route, Switch } from "react-router-dom";

// import Notfound from "../common/components/Notfound";
// import MainHiddenChapter from "../feature/chapter/hiddenChapter/MainHiddenChapter";
// import SecondHiddenChapter from "../feature/chapter/hiddenChapter/SecondHiddenChapter";
// import LastChapter from "../feature/chapter/lastChapter/LastChapter";
// import MainChapter from "../feature/chapter/mainChapter/MainChapter";
// import MainStory from "../feature/chapter/mainChapter/MainStory";
// import SecondChapter from "../feature/chapter/secondChapter/SecondChapter";
// import ThirdChapter from "../feature/chapter/thirdChapter/ThirdChapter";
// import Failure from "../feature/ending/Failure";
// import Success from "../feature/ending/Success";
// import Main from "../feature/main/Main";

// function App() {
//   return (
//     <Switch>
//       <Route path={constants.ROUTE_MAIN} component={Main} exact />
//       <Route path={constants.ROUTE_MAINSTORY} component={MainStory} exact />
//       <Route path="/asd" component={MainChapter} exact />
//       <Route
//         path={constants.ROUTE_MAIN_HIDDEN_CHAPTER}
//         component={MainHiddenChapter}
//       />
//       <Route path={constants.ROUTE_SECOND_CHAPTER} component={SecondChapter} />
//       <Route
//         path={constants.ROUTE_SECOND_HIDDEN_CHAPTER}
//         component={SecondHiddenChapter}
//       />
//       <Route path={constants.ROUTE_THIRD_CHAPTER} component={ThirdChapter} />
//       <Route path={constants.ROUTE_LAST_CHAPTER} component={LastChapter} />
//       <Route path={constants.ROUTE_ENDING} component={Success} exact />
//       <Route path={constants.ROUTE_ENDING_FAILURE} component={Failure} />
//       <Route path={constants.ROUTE_NOTFOUND} component={Notfound} />
//     </Switch>
//   );
// }

// export default App;

import React from "react";

import { Route, Switch } from "react-router-dom";

import Notfound from "../common/components/Notfound";
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
      <Route path="/" component={Main} exact />
      <Route path="/mainStory" component={MainStory} />
      <Route path="/mainChapter" component={MainChapter} />
      <Route path="/mainHiddenChapter" component={MainHiddenChapter} />
      <Route path="/secondChapter" component={SecondChapter} />
      <Route path="/SecondHiddenChapter" component={SecondHiddenChapter} />
      <Route path="/thirdChapter" component={ThirdChapter} />
      <Route path="/lastChapter" component={LastChapter} />
      <Route path="/ending" component={Success} exact />
      <Route path="/ending/failure" component={Failure} />
      <Route path="*" component={Notfound} />
    </Switch>
  );
}

export default App;
