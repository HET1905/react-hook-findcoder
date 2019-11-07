import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavbarComp from "./components/layouts/NavbarComp";
import Users from "./components/users/Users";
import User from "./components/users/User";

import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };
  // Load the default users from github
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  // Search the users on github
  searchUsers = async text => {
    console.log(text);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };
  // Clear the users
  clearUsers = () => this.setState({ users: [], loading: false });
  // set the alert if the serach box is blank
  setAlerts = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    });

    setTimeout(
      () =>
        this.setState({
          alert: null
        }),
      5000
    );
  };
  // get user information
  getUser = async userName => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // console.log(res.data);
    console.log(res.data);
    this.setState({ user: res.data, loading: false });
  };

  // get user repo
  getUserRepo = async userName => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res.data);
    this.setState({ repos: res.data, loading: false });
  };
  render() {
    const { users, user, repos, loading } = this.state;
    return (
      <Router>
        <div className="container-fluid">
          <NavbarComp />

          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    {/* receving the props from child component passsing it to App */}
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlerts={this.setAlerts}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepo={this.getUserRepo}
                    loading={loading}
                    user={user}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
