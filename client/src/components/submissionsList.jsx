import React, { useState, useEffect } from "react";
import { Pdfviewer } from "./pdfviewer";
import Modal from "react-modal";
import styled from "styled-components";
import { Button } from "@react-pdf-viewer/core";
import axios from "axios";
import { Input } from "./commonStyles";

const Container = styled.div`
  margin-top: -10%;
`;
const SubContainer = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  min-width: 25vw;
  padding: 5%;
  text-transform: lowercase;
  margin-top: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
`;
const InputContainer = styled.div`
  width: 60%;
`;
const customStyles = {
  content: {
    top: "10%",
    left: "10%",
    right: "10%",
    bottom: "10%",
    background: "rgba(0, 0, 0, 0.4)",
  },
};
Modal.setAppElement(document.getElementById("root"));
const SubmissionsList = (props) => {
  const [points, setPoints] = useState([]); // to set and update grade
  useEffect(() => {
    let pointsArray = [];
    props.data.submissions.forEach((element) => {
      pointsArray.push(element.points);
    });
    setPoints(pointsArray);
  }, []);

  //api call to grade a assignment
  const gradeAssignment = (
    e,
    id,
    userid,
    submittedFile,
    username,
    submittedPoints
  ) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/assignment/gradeAssignment`, {
        id: id,
        studentId: userid,
        submittedFile: submittedFile,
        student: username,
        points: submittedPoints,
      })
      .then((res) => {
        let updatedPointsArray = [];
        props.data.submissions.forEach((element) => {
          if (element.studentId == userid) {
            updatedPointsArray.push(submittedPoints);
          } else {
            updatedPointsArray.push(element.points);
          }
        });
        setPoints([...updatedPointsArray]);
        alert("graded sucessfully");
      })
      .catch((err) => console.log(err));
  };

  const [grade, setGrade] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (e) => {
    setGrade(e.target.value);
  };
  const submissions = props.data.submissions;
  return (
    <Container>
      <h3>Submissions({submissions.length})</h3>
      {submissions.map((element, index) => {
        return (
          <SubContainer key={element._id}>
            {element.student}
            <Flex>
              <Button onClick={openModal}>view</Button>
            </Flex>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="pdf viewer"
            >
              <Pdfviewer pdf={element.submittedFile} />
            </Modal>
            {points[index] === "" ? (
              <Flex>
                <InputContainer>
                  <Input
                    type="text"
                    placeholder="grade: _ /_"
                    onChange={(e) => handleChange(e)}
                  />
                </InputContainer>
                <Button
                  onClick={(e) =>
                    gradeAssignment(
                      e,
                      props.data._id,
                      element.studentId,
                      element.submittedFile,
                      element.student,
                      grade
                    )
                  }
                >
                  grade
                </Button>
              </Flex>
            ) : (
              <div>graded: {points[index]}</div>
            )}
          </SubContainer>
        );
      })}
    </Container>
  );
};

export default SubmissionsList;
