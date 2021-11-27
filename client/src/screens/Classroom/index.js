import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TabGroup from "./tabs";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 8%;
  width: 80vw;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
`;

const Classroom = (props) => {
  return (
    <div>
      <Container>
        <h1>{props.classData.name}</h1>
        <TabGroup user={props.user} classData={props.classData} />
      </Container>
    </div>
  );
};

export default Classroom;
