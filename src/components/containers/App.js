import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Player from "./Player";
import Login from "./Login";
import NotFound from "../NotFound";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/:activeVideo?" component={Player} /> */}
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  </BrowserRouter>
);

export default App;
