import React, { Component } from "react";
import { signoutWithFirebase } from "../firebase/firebase";

class Signout extends Component {
  componentDidMount() {
    signoutWithFirebase();
  }

  render() {
    return <div>sorry to see you go</div>;
  }
}

export default Signout;
