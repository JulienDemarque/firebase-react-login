import React from "react";
import "./App.css";
//import firebase from "./firebase/firebase";
import Header from "./components/Header";

export default ({ children, user }) => {
  return (
    <div>
      <Header user={user} />
      {children}
    </div>
  );
};
