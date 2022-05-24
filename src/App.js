import React, { useContext, useEffect } from "react";
import "./App.css";

import { Switch, Route, useHistory } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import FD from "./components/FD/FD";


// test.js
import FinancialGoals from "./components/Advisory/Forms/FinancialGoalsDetails/FinancialGoals.jsx";
//test

import Stepper from "./components/Advisory/Forms/Stepper.js";
function App() {
  return (
    <ScrollToTop>
      <div className="App">
        <Switch>
          <Route exact path="/" component={FinancialGoals} />

          <Route exact path="/FixedDeposits" component={FD} />

          <Route exact path="/forms/" component={Stepper} />
          
        </Switch>
      </div>
    </ScrollToTop>
  );
}

export default App;
