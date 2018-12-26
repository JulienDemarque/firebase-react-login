import React, { Component } from "react";
import { signoutWithFirebase } from "../firebase/firebase";

class Signout extends Component {
  componentDidMount() {
    signoutWithFirebase();
  }

  render() {
    return (
      <div className="level">
        <h5 className="title is-5">sorry to see you go</h5>
      </div>
    );
  }
}

export default Signout;
