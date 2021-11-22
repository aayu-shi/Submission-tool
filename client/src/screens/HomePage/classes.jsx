import React from "react";
import GetData from "../../Data/getClasses";
import ClassCard from "../../components/classCard";
import { Marginer, Grid } from "../../components/commonStyles";

const Classes = () => {
  const classes = GetData();
  console.log(classes);
  return (
    <div>
      <Marginer direction="vertical" margin={80} />
      {classes.map((index) => {
        return (
          <Grid key={index._id}>
            <ClassCard data={index} />
          </Grid>
        );
      })}
    </div>
  );
};

export default Classes;
