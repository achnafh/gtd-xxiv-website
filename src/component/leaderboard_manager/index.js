import React from "react";
import "./lb_manager.css";
import Title from './Group.png';
import No from "./NO.png";
import Points from "./POINTS.png";
import Team from "./TEAM.png";
import House from "./HOuSE.png";

import {LeaderBoard} from "./database.js";

export default function LBManager(props) {
  return (
  <div className="LB_manager">
    <img src={Title} className="title"/>
    
    <div className="leaderboard_parent">
      <table className="leaderboard_child">
          <tr>
            <th><img src={No} className="small_img"></img> </th>
            <th><img src={Team} className="table_img"></img> </th>
            <th><img src={House} className="table_img"></img> </th>
            <th><img src={Points} className="table_img"></img> </th>
          </tr>
          {console.log(LeaderBoard)}
          {OG_row(LeaderBoard)}
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
        <th>{value.no }</th>
        <th>{value.og}</th>
        <th>{value.house}</th>
        <th>{value.points} </th>
      </tr>
    ))
  }
  </>
  )
}