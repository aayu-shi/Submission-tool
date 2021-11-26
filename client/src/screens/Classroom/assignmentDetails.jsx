import React from "react";
import back from "../../assets/back.png";
import styled from "styled-components";
import { SubA } from "../../components/commonStyles";
import Pdfviewer from "../../components/pdfviewer";
import SubmitAssignment from "../../components/submitAssignment";
import SubmissionsList from "../../components/submissionsList";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10%;
`;
const BackButton = styled.img`
  float: left;
  border-radius: 50%;
  height: 40px;
  margin-top: 1%;
  width: 40px;
`;

const AssignmentCard = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  margin-top: 1%;
  margin-left: 2%;
  min-height: 70vh;
`;
const TitleBar = styled.div`
  width: 100vw;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: table-cell;
  border-bottom: 2px solid #4f9de7;
  text-align: left;
  vertical-align: middle;
  padding: 3%;
`;
const Title = styled.h2``;
const date = (date) => {
  var rdate =
    date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
  return rdate;
};
const time = (date) => {
  let d = new Date(date);
  const time = d.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return time;
};

const AssignmentDetails = (props) => {
  let userRole = sessionStorage.getItem("role") || "";
  const selectedFile = props.assignmentDetails.index.selectedFile;
  return (
    <Container>
      <BackButton
        src={back}
        alt="go back"
        onClick={() => {
          props.setassignmentDetails({});
        }}
      />
      <AssignmentCard>
        <TitleBar>
          <Title>{props.assignmentDetails.index.title}</Title>
          <SubA>
            <strong>Due on:</strong>
            {"  " +
              date(props.assignmentDetails.index.deadline) +
              "  " +
              time(props.assignmentDetails.index.deadline)}
          </SubA>
        </TitleBar>
        <SubA>{props.assignmentDetails.index.description}</SubA>
        <SubContainer>
          {selectedFile ? (
            selectedFile.slice(5, 20) === "application/pdf" ? (
              <Pdfviewer pdf={selectedFile} />
            ) : selectedFile.slice(0, 10) === "data:image" ? (
              <img
                alt="assignment file"
                src={selectedFile}
                height="420"
                width="320"
              />
            ) : (
              <iframe
                title="assignment file"
                src={selectedFile}
                height="420"
                width="320"
              ></iframe>
            )
          ) : (
            <div />
          )}
          {userRole === "student" ? (
            <div>
              <h4>Submit Assignment</h4>
              <SubmitAssignment id={props.assignmentDetails.index._id} />{" "}
            </div>
          ) : (
            <SubmissionsList data={props.assignmentDetails.index} />
          )}
        </SubContainer>
      </AssignmentCard>
    </Container>
  );
};

export default AssignmentDetails;
