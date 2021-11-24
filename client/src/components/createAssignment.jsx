import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import {
  Input,
  InputContainer,
  Form,
  InputText,
  Button,
  Buttons,
  RightAlign,
} from "./commonStyles";
import FileBase from "react-file-base64";
import { ErrorMsg } from "../screens/AuthPage/formStyles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.16)",
    width: "28vw",
  },
};
Modal.setAppElement(document.getElementById("root"));

const CreateAssignment = (props) => {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newAssignment, setAssignment] = useState({
    title: "",
    description: "",
    classId: "",
    deadline: "",
    selectedFile: "",
    classId: id,
  });
  const [err, setError] = useState("");
  const handleChange = (e) => {
    setAssignment({ ...newAssignment, [e.target.name]: e.target.value });
  };

  const create = () => {
    axios
      .post("http://localhost:8000/assignment/createAssignment", newAssignment)
      .then((res) => {
        alert("Assignment created!!");
        setError("");
        setAssignment({
          ...newAssignment,
          title: "",
          description: "",
          classId: "",
          deadline: "",
          selectedFile: "",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        setError("please fill all details correctly");
      });
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setError("");
    setAssignment({
      ...newAssignment,
      title: "",
      description: "",
      classId: "",
      deadline: "",
      selectedFile: "",
    });
    setIsOpen(false);
  }

  return (
    <div>
      <RightAlign>
        <Button onClick={openModal}>+ Create Assignment</Button>
      </RightAlign>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Classroom"
      >
        <Form>
          <ErrorMsg msg={err} />
          <InputContainer>
            <InputText>Title</InputText>
            <Input
              type="text"
              name="title"
              placeholder="title"
              value={newAssignment.title}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
            />
          </InputContainer>
          <InputContainer>
            <InputText>Description</InputText>

            <Input
              type="text"
              name="description"
              placeholder="description"
              value={newAssignment.description}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
            />
          </InputContainer>
          <InputContainer>
            <InputText>Deadline</InputText>
            <Input
              type="date"
              name="deadline"
              placeholder="date"
              // value={newAssignment.deadline}
              onChange={(e) => handleChange(e)}
            />
          </InputContainer>
          <InputContainer>
            <InputText>Upload File</InputText>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setAssignment({ ...newAssignment, selectedFile: base64 })
              }
            />
          </InputContainer>
        </Form>
        <Buttons>
          <Button onClick={create}>Upload Assignment</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Buttons>
      </Modal>
    </div>
  );
};

export default CreateAssignment;
