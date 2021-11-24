import React from "react";
import styled from "styled-components";
import { Button, Buttons } from "../components/commonStyles";
import { Link } from "react-router-dom";
import axios from "axios";

const MainContainer = styled.div`
  margin: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 18vh;
  min-width: 18vw;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  background-color: white;
  color: black;
`;
const Title = styled.div`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-transform: uppercase;
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
const addStudent = (id, student) => {
  axios
    .put(`http://localhost:8000/classroom/updateClass`, {
      id: id,
      student: student,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
const ClassCard = (props) => {
  if (props.display === "noButton") {
    return (
      <Link
        to={{ pathname: `/classroom/${props.data._id}/${props.data.name}` }}
        style={{ textDecoration: "none" }}
      >
        <MainContainer>
          <Title>{props.data.name}</Title>
          <Description>{props.data.description}</Description>
        </MainContainer>{" "}
      </Link>
    );
  } else
    return (
      <MainContainer>
        <Title>{props.data.name}</Title>
        <Description>{props.data.description}</Description>
        <Buttons>
          <Button onClick={() => addStudent(props.data._id, props.user.email)}>
            Enroll
          </Button>
        </Buttons>
      </MainContainer>
    );
};

export default ClassCard;
