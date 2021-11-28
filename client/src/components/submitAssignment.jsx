import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputContainer, Form, InputText, Button, Flex } from "./commonStyles";
import FileBase from "react-file-base64";
import Pdfviewer from "./pdfviewer";
import SubmissionsList from "./submissionsList";

const SubmitAssignment = (props) => {
  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(false);
  const [submittedFile, setSubmittedFile] = useState({
    selectedFile: "",
  });
  const [mySubmission, setMySubmission] = useState();
  const [isDeadlineMissed, setisDeadlineMissed] = useState(false);
  const deadline = new Date(props.deadline);
  console.log(deadline);

  function realtimeClock() {
    const now = new Date();
    deadline.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    console.log(
      now.getDate(),
      now.getTime(),
      deadline.getDate(),
      deadline.getTime()
    );
    if (now.getTime() > deadline.getTime()) {
      setisDeadlineMissed(true);
    } else {
      setisDeadlineMissed(false);
    }
  }
  requestAnimationFrame(realtimeClock);
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
          console.log(mySubmission);
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

  return (
    <div>
      {isAlreadySubmitted ? (
        <div>
          <p>Already Submitted</p>
          <Pdfviewer
            pdf={mySubmission?.submittedFile}
            name={"submission.pdf"}
          />
          <Flex>
            <h4>Grade: </h4>
            {mySubmission?.points === "" ? (
              <p>not yet graded</p>
            ) : (
              <p>{mySubmission?.points || "not yet graded"}</p>
            )}
          </Flex>
        </div>
      ) : isDeadlineMissed ? (
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
