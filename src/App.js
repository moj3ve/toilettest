import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Result from "./Result";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/results/:data">
            <Result />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
