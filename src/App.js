import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/technology" component={Technology}/>
          <Route path="/pinned" />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
