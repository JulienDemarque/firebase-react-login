import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import firebase from "./firebase/firebase";

class Index extends Component {
  state = { user: null };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log("user", firebase.auth().currentUser);
      if (user) {
        console.log("displayName: ", firebase.auth().currentUser.displayName);
        console.log("log in");
      } else {
        console.log("log out");
      }
      // we are not using user here because the displayName gets update
      // just after the Auth state changed, the async auth() give us for the state to be updated.
      // Need to found a more robust way to get that, but I can't find an event listener the profile updating
      this.setState({ user: firebase.auth().currentUser });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <App user={this.state.user}>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signout" exact component={Signout} />
          <Route
            path="/dashboard"
            exact
            render={() => <Dashboard user={this.state.user} hello="hello" />}
          />
        </App>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
