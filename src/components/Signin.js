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

  renderEmailInput = () => {
    const { textDisplay, email } = this.state;
    if (
      textDisplay === "The email address is badly formatted." ||
      textDisplay ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
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
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle" />
          </span>

          <p className="help is-danger">{textDisplay}</p>
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
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
      );
    }
  };

  renderPasswordInput = () => {
    const { textDisplay, password } = this.state;
    if (
      textDisplay ===
      "The password is invalid or the user does not have a password."
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
    const { textDisplay } = this.state;
    return (
      <div>
        <h5 className="title is-5">Sign-in</h5>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Email</label>
            {this.renderEmailInput()}
          </div>
          <div className="field">
            <label className="label">Password</label>
            {this.renderPasswordInput()}
          </div>
          <div className="control">
            <button className="button is-link">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
