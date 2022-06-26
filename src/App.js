import React from "react";
import './App.css';
import "./Fonts.css";
import PortfolioWrapper from "./Components/portfolio/PortfolioWrapper";
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PortfolioWrapper />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withRouter(App);
