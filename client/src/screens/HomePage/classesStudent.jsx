import React, { useState } from "react";
import GetData from "../../Actions/getClasses";
import ClassCard from "../../components/classCard";
import { Marginer, Grid } from "../../components/commonStyles";
import styled from "styled-components";

const Title = styled.h4`
  margin-left: 20px;
  font-size: 26px;
  font-weight: 500;
`;
// returns classes for a student
const ClassesStudent = (props) => {
  const [openClass, setopenClass] = useState(false);
  const [classData, setClassData] = useState();
  const allClasses = GetData();

  //classes in which student is enrolled
  let classes = allClasses.filter((class_data) => {
    const email = props.user.email;
    return email.includes(
      class_data.members.find((student) => student === email)
    );
  });

  //classes in which student is not enrolled
  let availableClasses = allClasses.filter((class_data) => {
    const email = props.user.email;
    return !email.includes(
      class_data.members.find((student) => student === email)
    );
  });
  return (
    <div>
      <Marginer direction="vertical" margin={80} />
      <Title>My Courses</Title>
      {classes.map((index) => {
        return (
          <Grid key={index._id}>
            <ClassCard
              data={index}
              user={props.user}
              display="noButton"
              setopenClass={setopenClass}
              setClassData={setClassData}
            />
          </Grid>
        );
      })}
      <Marginer direction="vertical" margin={80} />
      <Title>Available Courses</Title>
      {availableClasses.map((index) => {
        return (
          <Grid key={index._id}>
            <ClassCard data={index} user={props.user} />
          </Grid>
        );
      })}
    </div>
  );
};

export default ClassesStudent;
