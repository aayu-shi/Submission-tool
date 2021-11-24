import React from "react";
import GetData from "../../Actions/getClasses";
import ClassCard from "../../components/classCard";
import { Marginer, Grid } from "../../components/commonStyles";

const ClassesTeacher = (props) => {
  const allClasses = GetData();
  let classes = allClasses.filter((class_data) => {
    const email = props.user.email;
    return email.includes(class_data.creator);
  });
  return (
    <div>
      <Marginer direction="vertical" margin={80} />
      {classes.map((index) => {
        return (
          <Grid key={index._id}>
            <ClassCard data={index} user={props.user} display="noButton" />
          </Grid>
        );
      })}
    </div>
  );
};

export default ClassesTeacher;
