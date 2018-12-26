import React, { Component } from "react";
import { signupWithFirebase } from "../firebase/firebase";
import "bulma/css/bulma.css";
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

  renderEmailInput = () => {
    const { textDisplay, email } = this.state;
    if (
      textDisplay ===
        "The email address is already in use by another account." ||
      textDisplay === "The email address is badly formatted."
    ) {
      return (
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            placeholder="email"
            name="email"
            type="text"
            value={email}
            onChange={this.handleInputChange}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope" />
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle" />
          </span>

          <p class="help is-danger">{textDisplay}</p>
        </div>
      );
    } else {
      return (
        <div className="control has-icons-left ">
          <input
            className="input"
            placeholder="email"
            name="email"
            type="text"
            value={email}
            onChange={this.handleInputChange}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope" />
          </span>
        </div>
      );
    }
  };

  renderPasswordInput = () => {
    const { textDisplay, password } = this.state;
    if (
      textDisplay === "The password must be 6 characters long or more." ||
      textDisplay === "Password should be at least 6 characters"
    ) {
      return (
        <div className="control  has-icons-left has-icons-right">
          <input
            className="input is-danger"
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-unlock" />
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle" />
          </span>
          <p class="help is-danger">{textDisplay}</p>
        </div>
      );
    } else {
      return (
        <div className="control  has-icons-left ">
          <input
            className="input"
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-unlock" />
          </span>
        </div>
      );
    }
  };

  render() {
    const { status, textDisplay } = this.state;
    return (
      <div>
        <h5 className="title is-5">Sign-up</h5>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Email</label>

            {this.renderEmailInput()}
          </div>
          <div className="field">
            <label className="label">Password</label>
            {this.renderPasswordInput()}
          </div>
          <div className="field">
            <label className="label">Student or Teacher:</label>
            <div className="control">
              <div className="select">
                <select
                  name="status"
                  value={status}
                  onChange={this.handleInputChange}
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>
          </div>
          <div className="control">
            <button className="button is-link">Sign up</button>
          </div>
        </form>
        <p>{textDisplay === "successfully sign up" && textDisplay}</p>
      </div>
    );
  }
}

export default Signup;
