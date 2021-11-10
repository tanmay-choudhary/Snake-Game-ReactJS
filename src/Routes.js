import React from "react";
import { Switch } from "react-router-dom";
import Game from "./containers/Game";
import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Game} props={childProps} />
    
 
  </Switch>
