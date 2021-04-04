import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {Home} from "./Home";
import {Game} from "./Game";
import {Error} from "./Error";

class App extends React.Component{

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
