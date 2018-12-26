import React, { Component } from "react";
import { signupWithFirebase } from "../firebase/firebase";

//import firebase from "./firebase/firebase";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      status: "student",
      textDisplay: ""
    };
  }

  handleFormSubmit = e => {
    const { email, password, status } = this.state;
    e.preventDefault();
    signupWithFirebase(email, password, status, this.handleSuccessOrError);
  };

  handleSuccessOrError = ({ message, success }) => {
    this.setState({ textDisplay: message });
    if (success) {
      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 700);
    }
  };

  handleInputChange = e => {
    // using ES6 dynamic properties
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, status, textDisplay } = this.state;
    return (
      <div>
        <p>Sign-up</p>
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
          <fieldset>
            <label>Student or Teacher:</label>
            <select
              name="status"
              value={status}
              onChange={this.handleInputChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </fieldset>
          <input type="submit" value="Sign up" />
        </form>
        <p>{textDisplay}</p>
      </div>
    );
  }
}

export default Signup;
