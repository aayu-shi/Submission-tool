import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TabGroup from "./tabs";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 8%;
  width: 80vw;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
`;
// screen that appers when user enters a particular classroom
const Classroom = (props) => {
  const { id, name } = useParams();
  return (
    <div>
      <Container>
        <h1>{name}</h1>
        <TabGroup user={props.user} classData={props.classData} />
      </Container>
    </div>
  );
};

export default Classroom;
