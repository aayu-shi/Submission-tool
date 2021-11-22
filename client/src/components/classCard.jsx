import React from "react";
import styled from "styled-components";
import { Button } from "../components/commonStyles";

const MainContainer = styled.div`
  margin: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 18vh;
  width: 18vw;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  background-color: white;
  color: black;
`;
const Title = styled.div`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 35%;
  padding-top: 3%;
  display: table-cell;
  background-color: #4f9de7;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
`;
const Description = styled.p`
  background-color: transparent;
  padding: 5%;
  color: #595959;
  height: 35%;
`;
const ClassCard = (props) => {
  return (
    <MainContainer>
      <Title>{props.data.name}</Title>
      <Description>{props.data.description}</Description>
      <Button>Enroll</Button>
    </MainContainer>
  );
};

export default ClassCard;
