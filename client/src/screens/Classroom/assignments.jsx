import React from "react";
import { useParams } from "react-router";
import GetData from "../../Actions/getAssignments";
import styled from "styled-components";
import axios from "axios";
import {
  Marginer,
  Logo,
  GetDate,
  GetTime,
} from "../../components/commonStyles";
import icon from "../../assets/task.png";

const AssignmentContainer = styled.div`
  color: #595959;
  min-height: 12vh;
  width: 80vw;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.37);
  background-color: white;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #d1d0d0;
  &:hover {
    background-color: #f3edfd;
  }
`;
const Align = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;
const Text = styled.h4`
  vertical-align: center;
  margin-top: 2%;
`;

const Assignments = (props) => {
  const { id } = useParams();
  const allAssignments = GetData();
  let assignments = allAssignments.filter((data) => {
    return id.includes(data.classId);
  });
  return (
    <div>
      <Marginer direction="vertical" margin={80} />
      {assignments.map((index) => {
        const Details = () => {
          props.setassignmentDetails({ index });
        };
        return (
          <AssignmentContainer key={index._id} onClick={Details}>
            <Align>
              <div>
                <Marginer direction="vertical" margin={20} />
                <Logo src={icon} alt="logo" width="80" height="40" />
              </div>
              <Text>{index.title}</Text>
              <div>
                <strong>Due on:</strong>
                {"  " +
                  GetDate(index.deadline) +
                  "  " +
                  GetTime(index.deadline)}
              </div>
            </Align>
          </AssignmentContainer>
        );
      })}
    </div>
  );
};

export default Assignments;
