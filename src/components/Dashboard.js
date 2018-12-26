import React from "react";
import Teacher from "./Teacher";
import Student from "./Student";

export default ({ user, hello }) => {
  console.log(user);
  console.log(hello);
  return (
    <div>
      <h5>I am the Dashboard component</h5>
      {user && user.displayName === "student" && <Student />}
      {user && user.displayName === "teacher" && <Teacher />}
    </div>
  );
};
