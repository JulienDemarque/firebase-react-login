import React from "react";
import Teacher from "./Teacher";
import Student from "./Student";
import "bulma/css/bulma.css";

export default ({ user, hello }) => {
  console.log(user);
  console.log(hello);
  return (
    <div>
      {user && user.displayName === "student" && <Student />}
      {user && user.displayName === "teacher" && <Teacher />}
    </div>
  );
};
