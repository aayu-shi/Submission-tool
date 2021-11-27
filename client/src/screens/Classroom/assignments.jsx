import React from "react";
import { useParams } from "react-router";
import GetData from "../../Actions/getAssignments";
import styled from "styled-components";
import {
  Marginer,
  Logo,
  GetDate,
  GetTime,
} from "../../components/commonStyles";
import icon from "../../assets/task.png";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
  width: 100%;
`;
const Text = styled.h4`
  vertical-align: center;
  margin-top: 7px;
`;

const Assignments = (props) => {
  const { id } = useParams();
  const allAssignments = GetData();
  let assignments = allAssignments.filter((data) => {
    return id.includes(data.classId);
  });
  return (
    <div>
      <Marginer direction="vertical" margin={100} />
      {assignments.map((index) => {
        const Details = () => {
          props.setassignmentDetails({ index });
        };
        return (
          <AssignmentContainer key={index._id} onClick={Details}>
            <Align>
              <div>
                <AssignmentIcon sx={{ fontSize: "35px" }} />
              </div>
              <Typography
                variant="body2"
                component="div"
                sx={{ fontWeight: "550", marginTop: "7px" }}
              >
                {index.title}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ fontWeight: "520", marginTop: "7px" }}
              >
                <strong>Due on:</strong>
                {"  " +
                  GetDate(index.deadline) +
                  "  " +
                  GetTime(index.deadline)}
              </Typography>
            </Align>
          </AssignmentContainer>
        );
      })}
    </div>
  );
};

export default Assignments;
