import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { AppointmentsApp } from "./pages/AppointmentsApp";
import { Home } from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/appointments">
        <AppointmentsApp />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
