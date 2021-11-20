import React from "react";
import { useNavigate } from "react-router";

function Home(props) {
  const navigate = useNavigate();
  const logout = () => {
    props.setUserLogin({});
    navigate("/login");
  };
  return (
    <div>
      Welcome!!
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
