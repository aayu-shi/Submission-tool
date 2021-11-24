import React from "react";
import Navigation from "../../components/navbar";
import CreateClass from "../../components/createClass";
import ClassesStudent from "./classesStudent";
import ClassesTeacher from "./classesTeacher";
import { Routes as Switch, Route } from "react-router-dom";

function Home(props) {
  let userRole = props.user.role || sessionStorage.getItem("role") || "";

  if (userRole === "student") {
    return (
      <div>
        <Navigation setUserLogin={props.setUserLogin} />
        <Switch>
          <Route
            path="/"
            element={
              <div>
                <ClassesStudent user={props.user} />
              </div>
            }
          />
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <Navigation setUserLogin={props.setUserLogin} />
        <Switch>
          <Route
            path="/"
            element={
              <div>
                <CreateClass user={props.user} />
                <ClassesTeacher user={props.user} />
              </div>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default Home;
