import React from "react";
import back from "../../assets/back.png";
import styled from "styled-components";
import { GetDate, GetTime } from "../../components/commonStyles";
import Pdfviewer from "../../components/pdfviewer";
import axios from "axios";
import SubmitAssignment from "../../components/submitAssignment";
import SubmissionsList from "../../components/submissionsList";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

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
const Description = styled.div`
  display: block;
  color: #595959;
  text-decoration: none;
  background-color: white;
  padding: 10px;
  text-align: left;
`;

const AssignmentCard = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 1%;
  margin-left: 2%;
`;
const TitleBar = styled.div`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: table-cell;
  border-bottom: 2px solid #4f9de7;
  text-align: left;
  vertical-align: middle;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2``;

const AssignmentDetails = (props) => {
  let userRole = sessionStorage.getItem("role") || "";
  const selectedFile = props.assignmentDetails.index.selectedFile;
  function DeleteAssignment(id) {
    const config = {
      params: {
        id: id,
      },
    };
    axios
      .get("http://localhost:8000/assignment/deleteAssignment", config)
      .then((res) => {
        console.log(res);
        alert("deleted sucessfully");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  }
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
          <div>
            <Title>{props.assignmentDetails.index.title}</Title>
            <Description>
              <strong>Due on:</strong>
              {"  " +
                GetDate(props.assignmentDetails.index.deadline) +
                "  " +
                GetTime(props.assignmentDetails.index.deadline)}
            </Description>
          </div>
          {userRole === "staff" ? (
            <Button
              variant="contained"
              disableElevation
              color="error"
              onClick={() => {
                DeleteAssignment(props.assignmentDetails.index._id);
              }}
              sx={{ maxHeight: 40 }}
            >
              Delete
            </Button>
          ) : (
            <div />
          )}
        </TitleBar>
        <Description>{props.assignmentDetails.index.description}</Description>
        <SubContainer>
          {selectedFile ? (
            selectedFile.slice(5, 20) === "application/pdf" ? (
              <Pdfviewer pdf={selectedFile} />
            ) : selectedFile.slice(0, 10) === "data:image" ? (
              <img
                alt="assignment file"
                src={selectedFile}
                height="200"
                width="400"
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
              <br />
              <br />
              <SubmitAssignment
                id={props.assignmentDetails.index._id}
                deadline={props.assignmentDetails.index.deadline}
              />{" "}
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
