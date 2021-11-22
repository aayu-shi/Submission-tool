import React from "react";
import Navigation from "../../components/navbar";
import CreateClass from "../../components/createClass";
import Classes from "./classes";
import { Routes as Switch, Route } from "react-router-dom";

function Home(props) {
  console.log(props.user.role);
  return (
    <div>
      <Navigation setUserLogin={props.setUserLogin} />
      <Switch>
        <Route
          path="/"
          element={
            <div>
              <CreateClass user={props.user} />
              <Classes />
            </div>
          }
        />
      </Switch>
    </div>
  );
}

export default Home;
