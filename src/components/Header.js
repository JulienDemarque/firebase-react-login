import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bulma/css/bulma.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleClick = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }));
  };

  renderLinks() {
    if (this.props.user) {
      return (
        <div>
          <div className="buttons">
            <NavLink
              to="/signout"
              className="button is-light"
              onClick={this.handleClick}
            >
              Sign out
            </NavLink>
            <NavLink
              to="/dashboard"
              className="button is-primary"
              onClick={this.handleClick}
            >
              <strong>Dashboard</strong>
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="buttons">
            <NavLink
              to="/signup"
              className="button is-light"
              onClick={this.handleClick}
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/signin"
              className="button is-primary"
              onClick={this.handleClick}
            >
              Sign In
            </NavLink>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/" onClick={this.handleClick}>
            Home
          </NavLink>
          <a
            onClick={this.handleClick}
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
        <div
          id="navbarBasicExample"
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-end">
            <div className="navbar-item">{this.renderLinks()}</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
