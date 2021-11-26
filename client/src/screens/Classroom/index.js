import React, { useState } from "react";
import Navigation from "../../components/navbar";
import { useParams } from "react-router-dom";
import TabGroup from "./tabs";
import styled from "styled-components";
import CreateAssignment from "../../components/createAssignment";
import Assignments from "./assignments";
import AssignmentDetails from "./assignmentDetails";

const Container = styled.div`
  margin-top: 8%;
  width: 80vw;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
`;

const Classroom = (props) => {
  const [assignmentDetails, setassignmentDetails] = useState({});
  console.log(assignmentDetails);
  let userRole = props.user.role || sessionStorage.getItem("role") || "";
  const { id, name } = useParams();
  console.log(id, name);
  return (
    <div>
      <Navigation setUserLogin={props.setUserLogin} />
      <Container>
        <h1>{name}</h1>
        <TabGroup />
        {assignmentDetails.index ? (
          <AssignmentDetails
            assignmentDetails={assignmentDetails}
            setassignmentDetails={setassignmentDetails}
          />
        ) : (
          <div>
            {userRole === "staff" ? <CreateAssignment /> : <div />}
            <Assignments setassignmentDetails={setassignmentDetails} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Classroom;
