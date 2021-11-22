import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  Input,
  Button,
  ErrorMsg,
} from "./formStyles";
import { Marginer } from "../../components/commonStyles";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    // uniqueId: "",
  });
  const [err, setError] = useState("");
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const register = () => {
    axios
      .post("http://localhost:8000/api/signup", user)
      .then((res) => {
        alert("Signup sucessful login to continue!!");
        navigate("/login");
        console.log(res);
      })
      .catch((error) => {
        setError("*" + error.response.data.errors[0].error);
      });
  };
  return (
    <div>
      <Marginer direction="vertical" margin={80} />
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <ErrorMsg msg={err} />
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={user.password_confirmation}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
          {/* <Input
            type="text"
            placeholder="Unique Id"
            name="uniqueId"
            value={user.uniqueId}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          /> */}
        </InputContainer>
        <ButtonContainer>
          <Button onClick={register}>Sign up</Button>
        </ButtonContainer>
        <Link to={{ pathname: "/login" }} style={{ textDecoration: "none" }}>
          Sign In
        </Link>
      </MainContainer>
    </div>
  );
}

export default Signup;
