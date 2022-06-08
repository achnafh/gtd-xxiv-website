import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ErrorModal(props) {
  const { show, setShow, message } = props;
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Modal size="md" show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>Error!</Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: 24, textAlign: "center", fontWeight: "bold" }}>
          {message}
        </p>
      </Modal.Body>
      <Modal.Footer size="sm">
        <Button size="sm" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
