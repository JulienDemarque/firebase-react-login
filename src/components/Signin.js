import React, { Component } from "react";
import { signinWithFirebase } from "../firebase/firebase";

//import firebase from "./firebase/firebase";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      textDisplay: ""
    };
  }

  handleSuccessOrError = ({ message, success }) => {
    this.setState({ textDisplay: message });
    if (success) {
      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 700);
    }
  };

  handleFormSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log(e.target.value);
    signinWithFirebase(email, password, this.handleSuccessOrError);
  };

  handleInputChange = e => {
    // using ES6 dynamic properties
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, textDisplay } = this.state;
    return (
      <div>
        <p>Sign-in</p>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Email</label>
            <input
              name="email"
              type="text"
              value={email}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </fieldset>
          <input type="submit" value="Sign in" />
        </form>
        <p>{textDisplay}</p>
      </div>
    );
  }
}

export default Signin;
