import React from "react";
import "./App.css";
import Question from "./Componenets/Question";
import Homepage from "./Componenets/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/question" component={Question} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
