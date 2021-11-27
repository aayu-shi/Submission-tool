import React, { useState } from "react";
import GetData from "../../Actions/getClasses";
import ClassCard from "../../components/classCard";
import { Marginer, Grid } from "../../components/commonStyles";
import Classroom from "../Classroom";

const ClassesTeacher = (props) => {
  const [openClass, setopenClass] = useState(false);
  const [classData, setClassData] = useState();
  const allClasses = GetData();
  let classes = allClasses.filter((class_data) => {
    const email = props.user.email;
    return email.includes(class_data.creator);
  });
  if (openClass === false) {
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
                setopenClass={setopenClass}
                setClassData={setClassData}
              />
            </Grid>
          );
        })}
      </div>
    );
  } else {
    return <Classroom user={props.user} classData={classData} />;
  }
};

export default ClassesTeacher;
