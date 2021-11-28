import React, { useState } from "react";
import Modal from "react-modal";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import styled from "styled-components";
import pdfIcon from "../assets/pdf.png";

const Container = styled.div`
  width: 100%;
`;
const PDF = styled.div`
  display: flex;
  min-width: 200px;
  padding: 5%;
  margin: 2%;
  cursor: pointer;
`;
const FileName = styled.div`
  padding: 2%;
  text-transform: lowercase;
`;
//pdf viewer
export const Pdfviewer = (props) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Container>
      <div>
        {props.pdf && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer
                fileUrl={props.pdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}
        {!props.pdf && <>An error occured while loading pdf</>}
      </div>
    </Container>
  );
};
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

//modal for viewing pdf
const PdfModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <PDF onClick={openModal}>
        <img src={pdfIcon} alt="pdfIcon" height="40" width="40" />
        <FileName>{props.name ? props.name : "assignment.pdf"}</FileName>
      </PDF>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="pdf viewer"
      >
        <Pdfviewer pdf={props.pdf} />
      </Modal>
    </div>
  );
};

export default PdfModal;
