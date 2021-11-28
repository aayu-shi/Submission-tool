import React, { useState } from "react";
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

// modal to create a new Class
const CreateClass = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newClass, setClass] = useState({
    name: "",
    description: "",
    creator: props.user.email,
  });
  const [err, setError] = useState("");
  const handleChange = (e) => {
    setClass({ ...newClass, [e.target.name]: e.target.value });
  };

  //api call to create a new classroom
  const create = () => {
    axios
      .post("http://localhost:8000/classroom/createClass", newClass)
      .then((res) => {
        alert("Classroom created!!");
        setError("");
        setClass({ ...newClass, name: "", description: "" });
        setIsOpen(false);
        window.location.reload();
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
    setClass({ ...newClass, name: "", description: "" });
    setIsOpen(false);
  }

  return (
    <div>
      <RightAlign>
        <Button onClick={openModal}>+ Create Class</Button>
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
            <InputText>Subject</InputText>
            <Input
              type="text"
              name="name"
              placeholder="Subject"
              value={newClass.name}
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
              value={newClass.description}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
            />
          </InputContainer>
          <InputContainer>
            <InputText>Teacher</InputText>
            <Input
              type="text"
              name="creator"
              placeholder="Teacher"
              value={newClass.creator}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              disabled
            />
          </InputContainer>
        </Form>
        <Buttons>
          <Button onClick={create}>Create Class</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </Buttons>
      </Modal>
    </div>
  );
};

export default CreateClass;
