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

//api call to add student to the classroom
const addStudent = (id, student) => {
  axios
    .put(`http://localhost:8000/classroom/updateClass`, {
      id: id,
      student: student,
    })
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

//return class details card
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
    );
};

export default ClassCard;
