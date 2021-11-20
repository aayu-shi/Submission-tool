import React, { useState } from "react";
import styled from "styled-components";
import { Routes as Switch, Route } from "react-router-dom";
import Login from "./components/AuthPage/signin";
import Signup from "./components/AuthPage/signup";
import Home from "./components/HomePage";

const App = () => {
  const [user, setUserLogin] = useState({});
  // console.log(user.message);
  return (
    <Body>
      <Switch>
        <Route
          path="/"
          element={
            user && user._id ? (
              <Home setUserLogin={setUserLogin} />
            ) : (
              <Login setUserLogin={setUserLogin} />
            )
          }
        />
        <Route
          exact
          path="/signup"
          element={<Signup setUserLogin={setUserLogin} />}
        />
        <Route
          exact
          path="/login"
          element={<Login setUserLogin={setUserLogin} />}
        />
      </Switch>
    </Body>
  );
};
export default App;

const Body = styled.div`
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
