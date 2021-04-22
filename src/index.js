import React from "react";
import "./index.css";
import AA from "./111.jpeg";
import A from "./11.jpg";
import PageA from "./page/PageA";
import PageB from "./page/PageB";
import PageC from "./page/PageC";
import PageD from "./page/PageD";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
// export default () => {
//   console.log('React Hello World');
//   return (
//     <div>
//       <span id={'spanId'}>React Hello 666</span>
//       <img src={A} />

//       <PageA />
//       <PageB />
//     </div>
//   );
// };

export default () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PageA} />
      <Route exact path="/pageB" name="pageB" component={PageB} />
      <Route exact path="/pageB/pageD" name="pageD" component={PageD} />
      <Route path="/pageC" name="pageC" component={PageC} />
    </BrowserRouter>
  );
};
