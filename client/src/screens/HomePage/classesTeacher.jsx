import React, { useState } from "react";
import GetData from "../../Actions/getClasses";
import ClassCard from "../../components/classCard";
import { Marginer, Grid } from "../../components/commonStyles";

// returns classes created by a teacher
const ClassesTeacher = (props) => {
  const [classData, setClassData] = useState();
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
            <ClassCard
              data={index}
              user={props.user}
              display="noButton"
              setClassData={setClassData}
            />
          </Grid>
        );
      })}
    </div>
  );
};

export default ClassesTeacher;
