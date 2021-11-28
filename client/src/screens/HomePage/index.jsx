import React from "react";
import CreateClass from "../../components/createClass";
import ClassesStudent from "./classesStudent";
import ClassesTeacher from "./classesTeacher";

function Home(props) {
  let userRole = props.user.role || sessionStorage.getItem("role") || ""; // get user Role from session storage

  if (userRole === "student") {
    return (
      <div>
        <ClassesStudent user={props.user} />
      </div>
    );
  } else {
    return (
      <div>
        <CreateClass user={props.user} />
        <ClassesTeacher user={props.user} />
      </div>
    );
  }
}

export default Home;
