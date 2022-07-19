import React, { Component } from "react";
import "./leaderboard.css";
import Title from "./Group.png";
import axios from "axios";

import { Spinner, Modal, Button } from "react-bootstrap";

export default function Leaderboard(props) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const handleClose = () => setShowModal(false);
  const getData = async () => {
    try {
      const res = await fetch("https://gtdxxiv-service.pintugtd.com/api/");
      const og_data = await res.json();
      og_data.sort((a, b) => (a.points > b.points ? -1 : 1));
      setLoading(true);
      setData(og_data);
    } catch (e) {
      setShowModal(true);
    }
  };

  React.useEffect(() => {
    getData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="LB_manager" data-aos="zoom-out">
      <img src={Title} className="title" />

      {loading ? (
        <div className="leaderboard_parent">
          <table className="leaderboard_child">
            <tr>
              <th className="no">NO</th>
              <th className="team">TEAM</th>
              <th>FACTIONS</th>
              <th>POINTS</th>
            </tr>
            {OG_row(data)}
          </table>
        </div>
      ) : (
        <div className="leaderboard_parent">
          <Spinner
            animation="border"
            variant="info"
            style={{ width: "4rem", height: "4rem" }}
          ></Spinner>
        </div>
      )}

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There has been an error when fetching the data. Please try again.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function OG_row(data) {
  return (
    <>
      {data.map((value, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{value.og}</td>
          <td>{value.house}</td>
          <td>{value.points} </td>
        </tr>
      ))}
    </>
  );
}
