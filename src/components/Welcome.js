import React, { Component } from "react";
import "bulma/css/bulma.css";
import { NavLink } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  renderTitle = () => {
    const { user } = this.props;
    if (!user) {
      return (
        <h5 className="title is-5">
          <NavLink to="/signup">Sign Up</NavLink> or{" "}
          <NavLink to="/signin">Sign In</NavLink>!
        </h5>
      );
    } else {
      return (
        <h5 className="title is-5">
          Go to <NavLink to="/dashboard">Dashboard</NavLink>
        </h5>
      );
    }
  };
  render() {
    return (
      <div>
        <h2 className="title is-2">Welcome</h2>
        {this.renderTitle()}
      </div>
    );
  }
}

export default Welcome;
