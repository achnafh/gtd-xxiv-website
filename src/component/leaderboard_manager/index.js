import React, { Component } from "react";
import "./lb_manager.css";
import Title from './Group.png';
import axios from "axios";
import { render } from "@testing-library/react";

const api = axios.create({
  baseURL:"http://gtd-xxiv-website-backend.herokuapp.com/"
})

export default function LBManager(props) {
  const [data, setData] = React.useState([]);
  const getData = async() => {
    const res = await fetch("http://gtd-xxiv-website-backend.herokuapp.com/")
    const og_data = await res.json()
    setData(og_data) 
  }

  React.useEffect(() => {getData()}, []);

  return (
  <div className="LB_manager">

    <img src={Title} className="title"/>

    <div className="leaderboard_parent">
        <table className="leaderboard_child">
          <tr>
             <th className="no">NO</th>
             <th className="team">TEAM</th>
             <th>HOuSE</th>
             <th>POINTS</th>
          </tr>
          {OG_row(data)}
          
        </table>
    </div>

  </div>
  
  );
}

function OG_row(data){
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