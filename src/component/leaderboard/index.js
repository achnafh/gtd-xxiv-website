import React, { Component } from "react";
import "./leaderboard.css";
import Title from './Group.png';
import axios from "axios";

import { Spinner, Modal, Button } from "react-bootstrap";

export default function Leaderboard(props) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const handleClose = () => setShowModal(false);
  const getData = async() => {
    try{
      const res = await fetch("http://gtd-xxiv-website-backend.herokuapp.com/")
      const og_data = await res.json()
      setLoading(true)
      setData(og_data)
    }

    catch(e){
      setShowModal(true);
    }
  }

  React.useEffect(() => {getData()}, []);

  return (
  <div className="LB_manager">
    <img src={Title} className="title"/>
    
    {loading ? ( <div className="leaderboard_parent">
        <table className="leaderboard_child">
          <tr>
             <th className="no">NO</th>
             <th className="team">TEAM</th>
             <th>HOuSE</th>
             <th>POINTS</th>
          </tr>
          {OG_row(data)}
          
        </table>
    </div>) : (
    
    <div className="leaderboard_parent">
    <Spinner animation="grow" variant="info" style={{ width: "4rem", height: "4rem" }}></Spinner>
    </div>)}
    
    <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>There has been an error when fetching the data. Please try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
              Close
          </Button>
        </Modal.Footer>
      </Modal>



  </div>
  
  );
}

function OG_row(data){
  data.sort( (a,b) => a.points > b.points ? -1 : 1)
  return(
  <>
  {
    data.map((value, index) => (
      <tr>
        <td>{index+1}</td>
        <td>{value.og}</td>
        <td>{value.house}</td>
        <td>{value.points} </td>
      </tr>
    ))
  }
  </>
  )
}