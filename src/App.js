import React from "react";
//import firebase from "./firebase/firebase";
import Header from "./components/Header";
import "bulma/css/bulma.css";

export default ({ children, user }) => {
  return (
    <div className="container">
      <Header user={user} />
      {children}
    </div>
  );
};
