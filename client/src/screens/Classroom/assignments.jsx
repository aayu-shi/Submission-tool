import React from "react";
import { useParams } from "react-router";
import GetData from "../../Actions/getAssignments";
import styled from "styled-components";
import { Marginer, Logo } from "../../components/commonStyles";
import icon from "../../assets/task.png";

const AssignmentContainer = styled.div`
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
`;
const Text = styled.h4`
  color: #595959;
  vertical-align: center;
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
        let d = new Date(index.deadline);
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
              Submit before:
              {"  " +
                d.getDate() +
                "/" +
                d.getMonth() +
                "/" +
                d.getFullYear() +
                " " +
                (d.getHours() - 5 < 10
                  ? "0" + (d.getHours() - 5)
                  : d.getHours() - 5) +
                ":" +
                (d.getMinutes() - 30 < 10
                  ? "0" + (d.getMinutes() - 30)
                  : d.getMinutes() - 30)}
            </Align>
          </AssignmentContainer>
        );
      })}
    </div>
  );
};

export default Assignments;
