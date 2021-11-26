import React from "react";
import styled from "styled-components";
import logo from "../assets/read.png";
import { Dropdown, Logo } from "./commonStyles";

const NavigationWrapper = styled.nav`
  top: 0;
  height: 9vh;
  align-self: center;
  border-bottom: 1.5px solid rgb(134, 134, 134, 0.2);
  position: sticky;
  display: flex;
  background-color: white;
  width: 100vw;
  justify-content: space-between;
  padding-right: 3vw;
`;
const Align = styled.div`
  display: flex;
  justify-content: left;
`;
const NavElement = styled.text`
  background-color: white;
  color: #595959;
  display: flex;
  font-weight: 400;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #0070dd;
  }
`;
const Element = styled.text`
  background-color: white;
  color: #595959;
  display: flex;
  font-weight: 600;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`;
const Navigation = (props) => {
  return (
    <NavigationWrapper>
      <Align>
        <Element>
          <Logo src={logo} alt="logo" height="70" width="100" />
          Submission Tool
        </Element>
      </Align>
      <Align>
        <NavElement>Help</NavElement>
        <NavElement>
          <Dropdown setUserLogin={props.setUserLogin} />
        </NavElement>
      </Align>
    </NavigationWrapper>
  );
};
export default Navigation;
