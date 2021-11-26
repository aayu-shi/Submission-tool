import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputContainer, Form, InputText, Button } from "./commonStyles";
import FileBase from "react-file-base64";

const SubmitAssignment = (props) => {
  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(false);
  const [submittedFile, setSubmittedFile] = useState({
    selectedFile: "",
  });
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

    console.log(user.userId, props.id);
    axios
      .get(`http://localhost:8000/assignment/getSubmission`, config)
      .then((res) => {
        console.log(res, "assignment details");
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
        <p>already submitted</p>
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
