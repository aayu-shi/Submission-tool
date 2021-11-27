import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputContainer, Form, InputText, Button } from "./commonStyles";
import FileBase from "react-file-base64";
import Pdfviewer from "./pdfviewer";
import SubmissionsList from "./submissionsList";

const SubmitAssignment = (props) => {
  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(false);
  const [submittedFile, setSubmittedFile] = useState({
    selectedFile: "",
  });
  const [mySubmission, setMySubmission] = useState();
  const deadline = new Date(props.deadline);
  const today = new Date();
  const addSubmission = (e, id, userid, submittedFile, username) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/assignment/updateAssignment`, {
        id: id,
        studentId: userid,
        submittedFile: submittedFile,
        student: username,
      })
      .then((res) => {
        console.log(res);
        alert("submitted sucessfully");
        if (submittedFile.selectedFile !== "") {
          setIsAlreadySubmitted(true);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let user = getuserdetail();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      params: {
        id: props.id,
        studentId: user.userId,
      },
    };
    axios
      .get(`http://localhost:8000/assignment/getSubmission`, config)
      .then((res) => {
        console.log(res, "assignment details");
        if (res.data !== "") {
          setIsAlreadySubmitted(true);
          setMySubmission(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const getuserdetail = () => {
    let token = sessionStorage.getItem("token");
    const base64Url = token.split(".")[1];
    const rep = base64Url.replace("-", "+").replace("_", "/");
    let user = JSON.parse(window.atob(rep));
    return user;
  };

  let currentUser = getuserdetail();

  console.log(isAlreadySubmitted);

  return (
    <div>
      {isAlreadySubmitted ? (
        <div>
          <p>already submitted</p>
          <h4>My Submission: </h4>
          <Pdfviewer pdf={mySubmission} name={"submission.pdf"} />
        </div>
      ) : today > deadline ? (
        <div>deadline missed</div>
      ) : (
        <Form>
          <InputContainer>
            <InputText>Upload File (* pdf only)</InputText>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setSubmittedFile({ ...submittedFile, selectedFile: base64 })
              }
            />
          </InputContainer>
          <Button
            onClick={(e) => {
              addSubmission(
                e,
                props.id,
                currentUser.userId,
                submittedFile.selectedFile,
                currentUser.email
              );
            }}
          >
            Upload Assignment
          </Button>
        </Form>
      )}
    </div>
  );
};

export default SubmitAssignment;
