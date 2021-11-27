import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Button as Btn, Buttons } from "../components/commonStyles";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";

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
    .then((res) => {
      console.log(res);
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
const CourseCard = (props) => {
  return (
    <Card sx={{ minWidth: 275, minHeight: 150 }}>
      <CardContent
        sx={{
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ borderBottom: "1px solid #040526", fontWeight: "550" }}
        >
          {props.name}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "5px" }}>
          {props.desc}
        </Typography>
      </CardContent>
      {!props.id ? (
        <CardContent sx={{ display: "flex", flexDirection: "row" }}>
          <EmailIcon sx={{ fontSize: 12 }} />
          <Typography variant="body2" sx={{ fontSize: "10px" }}>
            {props.teacher}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <CardActions>
            <Button
              size="small"
              onClick={() => addStudent(props.id, props.email)}
              variant="outlined"
            >
              Enroll
            </Button>
          </CardActions>
        </CardContent>
      )}
    </Card>
  );
};

const ClassCard = (props) => {
  if (props.display === "noButton") {
    return (
      <Link
        to={{
          pathname: `/classroom/${props.data._id}/${props.data.name}`,
          query: { name: "name" },
        }}
        style={{ textDecoration: "none" }}
      >
        <CourseCard
          name={props.data.name}
          desc={props.data.description}
          teacher={props.data.creator}
        ></CourseCard>
      </Link>
    );
  } else
    return (
      <CourseCard
        name={props.data.name}
        desc={props.data.description}
        teacher={props.data.creator}
        id={props.data._id}
        email={props.user.email}
      ></CourseCard>
      // <MainContainer>
      //   <Title>{props.data.name}</Title>
      //   <Description>{props.data.description}</Description>
      //   <Buttons>
      //     <Btn onClick={() => addStudent(props.data._id, props.user.email)}>
      //       Enroll
      //     </Btn>
      //   </Buttons>
      // </MainContainer>
    );
};

export default ClassCard;
