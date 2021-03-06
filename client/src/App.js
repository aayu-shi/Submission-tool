import React, { useState } from "react";
import styled from "styled-components";
import { Routes as Switch, Route } from "react-router-dom";
import Login from "./screens/AuthPage/signin";
import Signup from "./screens/AuthPage/signup";
import Home from "./screens/HomePage";
import useToken from "./customHooks/useToken";
import Classroom from "./screens/Classroom";
import Navigation from "./components/navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  const { token, setToken } = useToken();
  const location = useLocation();

  //user token
  const [user, setUserLogin] = useState(token ? parseJwt(token) : {});
  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    let currentUser = JSON.parse(window.atob(base64));
    return {
      duration: currentUser.duration,
      email: currentUser.email,
      exp: currentUser.exp,
      iat: currentUser.iat,
      _id: currentUser.userId,
    };
  }

  return (
    <Body>
      {location.pathname !== "/login" &&
      location.pathname !== "/signup" &&
      user &&
      user._id ? (
        <Navigation setUserLogin={setUserLogin} />
      ) : (
        <div />
      )}
      <Switch>
        <Route
          path="/"
          element={
            user && user._id ? (
              <Home user={user} setUserLogin={setUserLogin} />
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
        <Route
          exact
          path="/classroom/:id/:name"
          element={<Classroom user={user} setUserLogin={setUserLogin} />}
        />
      </Switch>
    </Body>
  );
};
export default App;

const Body = styled.div`
  background-color: #f4f4f4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='3.3'%3E%3Cpath transform='translate(-31.5 4.4) rotate(2 1409 581) scale(1.00076)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.1' transform='translate(-28.5 21) rotate(3.8 800 450) scale(1.005984)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(10.9 -40.5) rotate(35.5 401 736) scale(1.005984)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1'%3E%3Cpath transform='translate(126 -3.4000000000000004) rotate(0.8500000000000001 150 345) scale(0.9889199999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='2.2' transform='translate(-56.5 -55) rotate(39.6 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-98 30) rotate(6.6 1400 132) scale(0.975)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;
