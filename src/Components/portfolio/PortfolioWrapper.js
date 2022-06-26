import React from 'react';
import Body from "./Body";
import { withRouter } from "react-router-dom";

function PortfolioWrapper() {
  return (<div>
    <Body />
  </div>)
}

export default withRouter(PortfolioWrapper);
