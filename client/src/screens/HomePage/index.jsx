import React from "react";
import Navigation from "../../components/navbar";
import CreateClass from "../../components/createClass";
import ClassesStudent from "./classesStudent";
import ClassesTeacher from "./classesTeacher";

function Home(props) {
  let userRole = props.user.role || sessionStorage.getItem("role") || "";

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
