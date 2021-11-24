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
const SubA = styled.a`
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

export const MainContainer = styled.div`
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 80vh;
  width: 80vw;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  color: black;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 98vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 80vw;
    height: 78vh;
  }
`;

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
