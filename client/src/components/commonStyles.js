import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router";

const DropDownContent = styled.div`
  position: absolute;
  display: none;
  background-color: white;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  z-index: 1;
`;
const StyledLi = styled.li`
  float: center;
`;
const DropDownLi = styled(StyledLi)`
  display: inline-block;
  background-color: white;
  &:hover ${DropDownContent} {
    display: block;
  }
`;
export const SubA = styled.a`
  display: block;
  color: #595959;
  text-decoration: none;
  background-color: white;
  padding: 10px;
  text-align: left;
  &:hover {
    color: #0070dd;
  }
`;
export const Dropdown = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    props.setUserLogin({});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    navigate("/login");
  };
  return (
    <DropDownLi>
      Profile
      <DropDownContent>
        <SubA>My Profile</SubA>
        <SubA onClick={logout}>Logout</SubA>
      </DropDownContent>
    </DropDownLi>
  );
};

export const Input = styled.input`
  margin-bottom: 0.8rem;
  border-radius: 0.2rem;
  background-color: white;
  border: 1px solid #595959;
  width: 100%;
  height: 2rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  align-items: left;
  height: 18%;
  width: 100%;
  padding: 0.3rem;
`;
export const InputText = styled.div`
  background-color: white;
  align-self: left;
  margin-bottom: 0.3rem;
`;
export const Form = styled.form`
  background-color: white;
  padding: 1rem;
  background-color: white;
`;
export const Buttons = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding: 0 1.5rem 0 1.5rem;
`;
export const Button = styled.button`
  background-color: #0070dd;
  border: none;
  color: white;
  font-size: 16px;
  padding: 7px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00509f;
  }
`;
export const RightAlign = styled.div`
  float: right;
  margin: 2rem;
`;

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

export function Marginer(props) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export const Grid = styled.div`
  display: inline-grid;
  padding: 20px;
  grid-template-columns: auto auto auto;
`;

export const Logo = styled.img`
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const GetDate = (date) => {
  var rdate =
    date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  return rdate;
};
export const GetTime = (date) => {
  let d = new Date(date);
  const time = d.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return time;
};
