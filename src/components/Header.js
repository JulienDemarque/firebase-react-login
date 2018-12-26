import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

class Header extends Component {
  renderLinks() {
    if (this.props.user) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">Home</Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        {this.renderLinks()}
      </nav>
    );
  }
}

export default Header;
