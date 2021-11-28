// import React from "react";
// import { Routes as Switch, Route } from "react-router-dom";
// import Login from "./components/AuthPage/signin";
// import Signup from "./components/AuthPage/signup";
// import Home from "./components/HomePage";

// function Routes(props) {
//   const user = props.user.message;
//   console.log(user);
//   return (
//     <Switch>
//       <Route
//         path="/"
//         element={
//           user && user._id ? (
//             <Home setUserLogin={props.setUserLogin} />
//           ) : (
//             <Login setUserLogin={props.setUserLogin} />
//           )
//         }
//       />
//       <Route
//         exact
//         path="/signup"
//         element={<Signup setUserLogin={props.setUserLogin} />}
//       />
//       <Route
//         exact
//         path="/login"
//         element={<Login setUserLogin={props.setUserLogin} />}
//       />
//     </Switch>
//   );
// }
// export default Routes;
