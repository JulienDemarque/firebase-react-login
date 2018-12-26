import React, { Component } from "react";
import "bulma/css/bulma.css";

export default ({ user }) => {
  return (
    <div className="level">
      <h2 className="title is-2">Welcome</h2>
      <h5 className="title is-5">
        {user ? "Go to dashboard" : "Sign up or Sign in!"}
      </h5>
    </div>
  );
};
