import React, { useState } from "react";
import styled from "styled-components";
import Assignments from "./assignments";
import AssignmentDetails from "./assignmentDetails";
import CreateAssignment from "../../components/createAssignment";
import { useParams } from "react-router-dom";
import Members from "./members";

const Tab = styled.button`
  font-size: 16px;
  padding: 20px 40px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  justify-content: center;
  width: 100%;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #0070dd;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const MembersContainer = styled.div`
  width: 100%;
  margin-top: 5%;
`;
const types = ["Assignments", "People"];
export default function TabGroup(props) {
  const [assignmentDetails, setassignmentDetails] = useState({});
  let userRole = props.user.role || sessionStorage.getItem("role") || "";
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      {active === "Assignments" ? (
        assignmentDetails.index ? (
          <AssignmentDetails
            assignmentDetails={assignmentDetails}
            setassignmentDetails={setassignmentDetails}
          />
        ) : (
          <div>
            {userRole === "staff" ? <CreateAssignment /> : <div />}
            <Assignments
              setassignmentDetails={setassignmentDetails}
              classDetails={props.classData}
            />
          </div>
        )
      ) : (
        <MembersContainer>
          <Members />
        </MembersContainer>
      )}
    </>
  );
}
