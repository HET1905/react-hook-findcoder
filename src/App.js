import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarComp from "./components/layouts/NavbarComp";
import Users from "./components/users/Users";
import User from "./components/users/User";

import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";

import "./App.css";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="container-fluid">
            <NavbarComp />

            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      {/* receving the props from child component passsing it to App */}
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
